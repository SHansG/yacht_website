#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly Yacht_DbContext _context;

        public OrdersController(Yacht_DbContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            return await _context.Orders.ToListAsync();
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        //// PUT: api/Orders/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutOrder(int id, Order order)
        //{
        //    if (id != order.OrderId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(order).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!OrderExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/Orders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {

            if (DateTaken(order.PickupDate, order.DropoffDate))
            {
                return BadRequest();
            }

            

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            int maxOrderId = await _context.Orders.MaxAsync(p => p.OrderId);
            var dt = new Order()
            {
                OrderId = maxOrderId,
                CustomerId = order.CustomerId,
                YachtId = order.YachtId,
                PickupDate = order.PickupDate,
                DropoffDate = order.DropoffDate,
                TotalPrice = order.TotalPrice
    };


            return Ok(dt);
            //return CreatedAtAction("GetOrder", new { id = order.OrderId }, order);
        }

        //// DELETE: api/Orders/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteOrder(int id)
        //{
        //    var order = await _context.Orders.FindAsync(id);
        //    if (order == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Orders.Remove(order);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool DateTaken(DateTime? pickup, DateTime? dropoff)
        {
            List<DateTime?> pickupDates = new List<DateTime?>();
            pickupDates = _context.Orders.Select(p => p.PickupDate).ToList();
            List<DateTime?> dropoffDates = new List<DateTime?>();
            dropoffDates = _context.Orders.Select(p => p.DropoffDate).ToList();
            bool isTaken = false;
            for (int i = 0; i < pickupDates.Count; i++)
            {
                isTaken = (pickup >= dropoffDates[0] && pickupDates[0] <= pickup) | (dropoff >= pickupDates[0] && dropoffDates[0] <= dropoff);
            }

            return isTaken;
        }
    }
}
