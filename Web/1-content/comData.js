com.apiDomain = "http://localhost:2717";
var comData = {
    gender: [
        { id: "male", text: "男" },
        { id: "female", text: "女" }
    ],
    formatter: {
        format: function (data, value) {
            for (var i = 0, len = data.length; i < len; i++) {
                var obj = data[i];
                if (obj != null) {
                    if (obj["id"] == value) {
                        return obj["text"];
                    }
                }
            }
            return "未知";
        },
        formatGender: function (value) {
            console.log(value);
            return comData.formatter.format(comData.gender, value);
        }
    }
};

