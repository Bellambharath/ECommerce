using System.ComponentModel.DataAnnotations;

namespace ProductsApi.Models
{
    public class Products
    {
        [Key]
        public int ProductId { get; set; }
      
        public string ProductCategory { get; set; }
        public string ProductName { get; set; }
        public int ProductPrice { get; set; }
        public int Noofstocks { get; set; }
        public string Imageurl { get; set; }
        public string ProductDescription { get; set; }
        public double ProductRating { get; set; }
        public string SellerName { get; set; }



    }
}
