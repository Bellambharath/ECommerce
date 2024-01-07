using ProductsApi.Data;
using ProductsApi.Models;

namespace ProductsApi.Repository
{
    public class ProductsRepo : IProductsRepo
    {
        private readonly ProductsApiContext _context;

        public ProductsRepo(ProductsApiContext context)
        {
            _context = context;
        }
        public Products AddProducts(Products products)
        {
            try
            {
                _context.Products.Add(products);
                _context.SaveChanges();
                return products;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public bool DeleteProducts(int productid)
        {
            try
            {
                Products p = _context.Products.Where(x => x.ProductId == productid).First();
                if (p != null)
                {
                    _context.Products.Remove(p);
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

        public List<Products> GetAllProducts()
        {
             return _context.Products.ToList();
        }

        public Products Updateproducts(Products products)
        {
            try
            {
                Products p = _context.Products.Where(x => x.ProductId == products.ProductId).First();


                p.ProductName = products.ProductName;
                p.ProductPrice = products.ProductPrice;
                p.ProductCategory = products.ProductCategory;

                p.ProductDescription = products.ProductDescription;
                p.Noofstocks = products.Noofstocks;
                p.Imageurl = products.Imageurl;
                _context.SaveChanges();
                return p;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public bool UpdateRating(Rating rating)
        {
            try
            {
                Products p = _context.Products.Where(x => x.ProductId == rating.ProductId).First();
                p.ProductRating = rating.ProductRating;
                _context.SaveChanges();
                return true;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public Products UpdateStock(Products products)
        {
            try
            {
                Products p = _context.Products.Where(x => x.ProductId == products.ProductId).First();
                p.Noofstocks = p.Noofstocks - products.Noofstocks;
                _context.SaveChanges();
                return p;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }

        }
      
    }
}
