using BuyApi.Models;

namespace BuyApi.Repository
{
    public interface IBuyRepository
    {
        List<Buy> GetAll();
        Task<Buy> AddAsync(Buy buyingdetails);
        Buy UpdateBuy(Buy buy);
        bool DeleteBuy(int id);
        bool IsFirstOrder(string userName);
    }
}
