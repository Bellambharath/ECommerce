namespace CartApi.Models
{
    public class Cart
    {
        public int CartId { get; set; }
        public string UserName { get; set; }
        public string ProductId { get; set; }
        public string Quantity { get; set; }
    }
}
