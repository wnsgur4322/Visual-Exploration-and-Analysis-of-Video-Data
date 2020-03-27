$( function () {
        $( "#defaultPlayer" ).mediaPlayer( {
            autoplay : false,
            src : "full/samples-data/examples/vid/amalia01.mp4",
            //src : "blazers.mp4",
            controlBar :
                {
                    sticky : true
                },
            plugins : {
                dataServices : [
                    'full/samples-data/examples/json/amalia01-events.json',
                    'full/samples-data/examples/json/amalia01-kf.json',
                    'full/samples-data/examples/json/amalia01-ball.json'
                ],
                list : [
                    {
                        'className' : 'fr.ina.amalia.player.plugins.TimelinePlugin',
                        'container' : '#timeline',
                        'parameters' : {
                            listOfLines : [
                                {
                                    title : 'Events',
                                    type : 'cuepoint',
                                    metadataId : 'events-amalia01',
                                    color : '#3CF',
                                    pointNav : true
                                },
                                {
                                    title : 'Ball moving up',
                                    type : 'segment',
                                    metadataId : 'ball-amalia01',
                                    color : '#F00'
                                },
                                {
                                    title : 'Keyframes every 2s',
                                    type : 'image',
                                    metadataId : 'kf-amalia01',
                                    pointNav : true
                                }
                            ]
                        }
                    }
                ]
            }
        } );
    } );


var data = [4, 8, 15, 16, 23, 200];

var svgwidth = 500, svgheight = 300, barPadding = 5;
var barwidth = (svgwidth / data.length);

var svg = d3.select('svg')
        .attr("width", svgwidth)
        .attr("height", svgheight)

var barchart = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", function(d) {
                return svgheight - d
        })
        .attr("height", function(d){
                return d;
        })
        .attr("width", barwidth - barPadding)
        .attr("transform", function (d, i){
                var translate = [barwidth * i, 0];
                return "translate(" + translate + ")";
        });

var imgs = d3.json("js/video.json", function (d) {
        var img = d3.select("body").append("img")
                .attr("width", 500)
                .attr("height", 500)
        img.selectAll
} )

