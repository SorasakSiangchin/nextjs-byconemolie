using System;
using System.Data;

namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = null!;
        public string? Password { get; set; }
        public string? Position { get; set; }
        public DateTime Created { get; set; }
    }
}