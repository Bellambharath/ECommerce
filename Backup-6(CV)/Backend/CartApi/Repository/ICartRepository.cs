using CartApi.Models;

namespace CartApi.Repository
{
    public interface ICartRepository
    {
        List<CartIO> GetAllCarts();
        CartIO AddCart(CartIO cart);
        CartIO DeleteCart(string username,int id);

        void UpdateQuantity(string username, int index, int value);
    }
}
