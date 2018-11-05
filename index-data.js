            var app = new Vue({
                el: "#app",
                data: {
                    Books: [],
                    text: "",
                    notFound: false,



                },

                methods: {

                    fetchInit: function (url) {

                        fetch("https://api.myjson.com/bins/zyv02", {
                            headers: {}
                        }).then(function (data) {
                            return data.json();
                        }).then(function (myData) {
                            app.Books = myData.books;
                            console.log(app.Books);

                        })

                    }

                },

                created: function () {
                    this.fetchInit(this.url);
                },

                computed: {

                    filter: function () {
                        var arrayTable = [];
                        for (var i = 0; i < this.Books.length; i++) {

                            if (this.text == "" || this.Books[i].title.toLowerCase().includes(this.text.toLowerCase()) || this.Books[i].description.toLowerCase().includes(this.text.toLowerCase())) {
                                arrayTable.push(this.Books[i]);
                            }
                        }

                        return arrayTable;
                    }

                },

                updated: function () {
                    var cardsChild = document.getElementById("child")
                    if (cardsChild.children.length == 0 && this.text != "") {
                        this.notFound = true;
                    } else {
                        this.notFound = false;
                    }
                }

            })
