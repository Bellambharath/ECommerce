using BuyApi.Data;
using BuyApi.Models;
using Microsoft.CodeAnalysis;

namespace BuyApi.Repository
{
    public class BuyRepository : IBuyRepository
    {
        private readonly BuyApiContext _context;

        public BuyRepository(BuyApiContext context)
        {
            _context = context;
        }
        public async Task<Buy> AddAsync(Buy buyingdetails)
        {
            try
            {
                _context.Buy.Add(buyingdetails);

                await _context.SaveChangesAsync();
                return buyingdetails;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public List<Buy> GetAll()
        {
            return _context.Buy.ToList();
        }

        public bool DeleteBuy(int id)
        {
            Buy p = _context.Buy.Where(x => x.BuyId == id).FirstOrDefault();
            try
            {


                if (p != null)
                {
                    _context.Buy.Remove(p);
                    _context.SaveChanges();
                    return true;
                }
                return false;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }

        }

        public Buy UpdateBuy(Buy buy)
        {
            Buy b=_context.Buy.Where(x=>x.BuyId==buy.BuyId).FirstOrDefault();
            try
            {
                if (buy.Status == 3)
                {
                    DateTime indianTime = TimeZoneInfo.ConvertTimeBySystemTimeZoneId(DateTime.Now, "India Standard Time");
                    b.StatusTime = indianTime;
                }

                b.UserName = buy.UserName;
                b.Status = buy.Status;
                b.StatusTime = buy.StatusTime;
                b.ProductId = buy.ProductId;
                b.NoOfItems = buy.NoOfItems;
                b.AddressId = buy.AddressId;

                _context.SaveChanges();
                return b;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }


        }

        public bool IsFirstOrder(string userName)
        {
            try
            {
                bool userExist = _context.Buy.Any(x => x.UserName == userName);
                return !userExist;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
