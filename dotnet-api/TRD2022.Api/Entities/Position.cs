using Binance.Net.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TRD2022.Api.Entities
{
    public class Position
    {
        public IBinanceTick Data { get; set; }
        public string Symbol { get; set; }
        public decimal Valorization { get; set; }
        public decimal InitialValue { get; set; }
        public decimal InitialPrice { get; set; }
        public decimal LastMaxPrice { get; set; }
        public decimal LastValue { get; set; }
        public decimal LastPrice { get; set; }
        public decimal Quantity { get; set; }
        public int Minutes { get; set; }
        public decimal Risk { get; set; }
        public RecommendationType Type { get; set; }
    }

    public enum RecommendationType
    {
        Day = 0,
        Hour = 1,
        Minute = 2
    }
}
