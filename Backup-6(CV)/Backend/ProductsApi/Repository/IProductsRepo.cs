using ProductsApi.Models;

namespace ProductsApi.Repository
{
    public interface IProductsRepo
    {
        List<Products> GetAllProducts();
        Products Updateproducts(Products products);
        Products AddProducts(Products products);
        bool DeleteProducts(int productid);
        Products UpdateStock(Products products);

        bool UpdateRating(Rating rating);
      
    }
}
