using System.ComponentModel.DataAnnotations;

namespace BuyApi.Models
{
    public class Buy
    {
        [Key]
        public int BuyId { get; set; }
        public int AddressId { get; set; }
        public string UserName { get; set; }
        
        public string ProductId { get; set; }
        public int Status { get; set; }
         
        [DataType(DataType.DateTime)]
        public DateTime StatusTime { get; set; }
        public string NoOfItems { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime OrderPlacedTime { get; set; }
        public string Orderid { get; set; }
        public int TotalPrice { get; set; }
    }
}
