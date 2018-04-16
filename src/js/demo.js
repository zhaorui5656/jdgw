$.ajax({
    url: "/getdata",
    type: "GET",
    success: function(res) {
        var da = JSON.parse(res);
        var html = "";
        $.each(da.list, function(i, v) {
            console.log(v);
            html += " <dl><dt><img src='" + v.img + "'></dt><dd>" + v.p + "</dd></dl>";
        });
        $(".t").append(html);

        var ht = "";
        $.each(da.bom, function(i, v) {
            ht += "<dl><dt><img src='" + v.img + "'></dt><dd>" + v.p + "</dd></dl>";
        })
        $(".b").append(ht);

    },
    error: function(error) {
        console.log(error)
    }
})

new Swiper(".box", {
    autoplay: 2000,
    loop: true,
    pagination: ".page"
})