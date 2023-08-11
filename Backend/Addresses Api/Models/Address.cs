using System.ComponentModel.DataAnnotations;

namespace Addresses_Api.Models
{
    public class Address
    {
        [Key]
        public int AddressId { get; set; }
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string Country { get; set; }
        public string MobileNo { get; set; }
        public int Pincode { get; set; }
        public string HouseNo { get; set; }
        public string Area { get; set; }
        public string LandMark { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public bool IsDefault { get; set; }

    }
}
