using System.ComponentModel.DataAnnotations;

namespace BuyApi.Models
{
    public class CouponCodes
    {
        [Key]
        public int CouponId { get; set; }
        public string Couponcode { get; set; }
        public string description { get; set; }
        public bool IsApplicable { get; set; }


    }
}
