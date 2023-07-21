import { useState, useEffect } from "react";
import * as d3 from "d3";

export const data = [{"letter":"A","frequency":0.08167},{"letter":"B","frequency":0.01492},{"letter":"C","frequency":0.02782},{"letter":"D","frequency":0.04253},{"letter":"E","frequency":0.12702},{"letter":"F","frequency":0.02288},{"letter":"G","frequency":0.02015},{"letter":"H","frequency":0.06094},{"letter":"I","frequency":0.06966},{"letter":"J","frequency":0.00153},{"letter":"K","frequency":0.00772},{"letter":"L","frequency":0.04025},{"letter":"M","frequency":0.02406},{"letter":"N","frequency":0.06749},{"letter":"O","frequency":0.07507},{"letter":"P","frequency":0.01929},{"letter":"Q","frequency":0.00095},{"letter":"R","frequency":0.05987},{"letter":"S","frequency":0.06327},{"letter":"T","frequency":0.09056},{"letter":"U","frequency":0.02758},{"letter":"V","frequency":0.00978},{"letter":"W","frequency":0.0236},{"letter":"X","frequency":0.0015},{"letter":"Y","frequency":0.01974},{"letter":"Z","frequency":0.00074}];
export const dataInc = [
    {"advertiser_key":37584,"application_difference":573,"application_growth_rate":0.47,"apply_to_click_rate_difference":0.03,"apply_to_click_rate_growth_rate":0.11,"approval_rate_difference":-0.05,"approval_rate_growth_rate":-0.09,"approvals_difference":250,"approvals_growth_rate":0.34,"clicks_difference":1609,"clicks_growth_rate":0.32,"conversion_rate_difference":0,"conversion_rate_growth_rate":0.01,"last_period_Applications":1226,"last_period_Apply_to_click_rate":0.24,"last_period_Approval_rate":0.6,"last_period_Approvals":735,"last_period_Conversion_rate":0.15,"last_period_num_clicks":5013,"publisher_key":1900670,"publisher_name":"Rakuten Advertising Test Publisher 4","rank":1,"this_period_Applications":1799,"this_period_Apply_to_click_rate":0.27,"this_period_Approval_rate":0.55,"this_period_Approvals":985,"this_period_Conversion_rate":0.15,"this_period_num_clicks":6622},
    {"advertiser_key":37584,"application_difference":440,"application_growth_rate":0.37,"apply_to_click_rate_difference":0,"apply_to_click_rate_growth_rate":0.01,"approval_rate_difference":-0.03,"approval_rate_growth_rate":-0.05,"approvals_difference":220,"approvals_growth_rate":0.3,"clicks_difference":1729,"clicks_growth_rate":0.36,"conversion_rate_difference":-0.01,"conversion_rate_growth_rate":-0.04,"last_period_Applications":1202,"last_period_Apply_to_click_rate":0.25,"last_period_Approval_rate":0.61,"last_period_Approvals":733,"last_period_Conversion_rate":0.15,"last_period_num_clicks":4857,"publisher_key":2889700,"publisher_name":"Rakuten Marketing Test Publisher 12","rank":2,"this_period_Applications":1642,"this_period_Apply_to_click_rate":0.25,"this_period_Approval_rate":0.58,"this_period_Approvals":953,"this_period_Conversion_rate":0.14,"this_period_num_clicks":6586},
    {"advertiser_key":37584,"application_difference":467,"application_growth_rate":0.38,"apply_to_click_rate_difference":0.01,"apply_to_click_rate_growth_rate":0.02,"approval_rate_difference":-0.02,"approval_rate_growth_rate":-0.03,"approvals_difference":236,"approvals_growth_rate":0.33,"clicks_difference":1723,"clicks_growth_rate":0.35,"conversion_rate_difference":0,"conversion_rate_growth_rate":-0.01,"last_period_Applications":1228,"last_period_Apply_to_click_rate":0.25,"last_period_Approval_rate":0.57,"last_period_Approvals":705,"last_period_Conversion_rate":0.14,"last_period_num_clicks":4916,"publisher_key":2953937,"publisher_name":"Rakuten Marketing Test Publisher 13","rank":3,"this_period_Applications":1695,"this_period_Apply_to_click_rate":0.26,"this_period_Approval_rate":0.56,"this_period_Approvals":941,"this_period_Conversion_rate":0.14,"this_period_num_clicks":6639},
    {"advertiser_key":37584,"application_difference":454,"application_growth_rate":0.35,"apply_to_click_rate_difference":0,"apply_to_click_rate_growth_rate":0,"approval_rate_difference":-0.03,"approval_rate_growth_rate":-0.05,"approvals_difference":207,"approvals_growth_rate":0.29,"clicks_difference":1749,"clicks_growth_rate":0.36,"conversion_rate_difference":-0.01,"conversion_rate_growth_rate":-0.05,"last_period_Applications":1295,"last_period_Apply_to_click_rate":0.26,"last_period_Approval_rate":0.56,"last_period_Approvals":719,"last_period_Conversion_rate":0.15,"last_period_num_clicks":4913,"publisher_key":1917234,"publisher_name":"Rakuten Advertising Test Publisher 7","rank":4,"this_period_Applications":1749,"this_period_Apply_to_click_rate":0.26,"this_period_Approval_rate":0.53,"this_period_Approvals":926,"this_period_Conversion_rate":0.14,"this_period_num_clicks":6662},
    {"advertiser_key":37584,"application_difference":459,"application_growth_rate":0.36,"apply_to_click_rate_difference":0,"apply_to_click_rate_growth_rate":0,"approval_rate_difference":-0.04,"approval_rate_growth_rate":-0.08,"approvals_difference":190,"approvals_growth_rate":0.26,"clicks_difference":1760,"clicks_growth_rate":0.36,"conversion_rate_difference":-0.01,"conversion_rate_growth_rate":-0.07,"last_period_Applications":1262,"last_period_Apply_to_click_rate":0.26,"last_period_Approval_rate":0.58,"last_period_Approvals":732,"last_period_Conversion_rate":0.15,"last_period_num_clicks":4893,"publisher_key":2088243,"publisher_name":"Rakuten Advertsing Test Publisher 6","rank":5,"this_period_Applications":1721,"this_period_Apply_to_click_rate":0.26,"this_period_Approval_rate":0.54,"this_period_Approvals":922,"this_period_Conversion_rate":0.14,"this_period_num_clicks":6653},
    {"advertiser_key":37584,"application_difference":566,"application_growth_rate":0.47,"apply_to_click_rate_difference":0.02,"apply_to_click_rate_growth_rate":0.09,"approval_rate_difference":-0.05,"approval_rate_growth_rate":-0.09,"approvals_difference":230,"approvals_growth_rate":0.33,"clicks_difference":1733,"clicks_growth_rate":0.35,"conversion_rate_difference":0,"conversion_rate_growth_rate":-0.01,"last_period_Applications":1197,"last_period_Apply_to_click_rate":0.24,"last_period_Approval_rate":0.58,"last_period_Approvals":690,"last_period_Conversion_rate":0.14,"last_period_num_clicks":4912,"publisher_key":2023850,"publisher_name":"Rakuten Advertising Test Publisher 3","rank":6,"this_period_Applications":1763,"this_period_Apply_to_click_rate":0.27,"this_period_Approval_rate":0.52,"this_period_Approvals":920,"this_period_Conversion_rate":0.14,"this_period_num_clicks":6645},
    {"advertiser_key":37584,"application_difference":560,"application_growth_rate":0.45,"apply_to_click_rate_difference":0.02,"apply_to_click_rate_growth_rate":0.09,"approval_rate_difference":-0.15,"approval_rate_growth_rate":-0.24,"approvals_difference":89,"approvals_growth_rate":0.11,"clicks_difference":1640,"clicks_growth_rate":0.33,"conversion_rate_difference":-0.03,"conversion_rate_growth_rate":-0.17,"last_period_Applications":1231,"last_period_Apply_to_click_rate":0.25,"last_period_Approval_rate":0.65,"last_period_Approvals":800,"last_period_Conversion_rate":0.16,"last_period_num_clicks":4955,"publisher_key":2679442,"publisher_name":"Rakuten Advertising Test Publisher 2","rank":7,"this_period_Applications":1791,"this_period_Apply_to_click_rate":0.27,"this_period_Approval_rate":0.5,"this_period_Approvals":889,"this_period_Conversion_rate":0.13,"this_period_num_clicks":6595},
    {"advertiser_key":37584,"application_difference":476,"application_growth_rate":0.39,"apply_to_click_rate_difference":0.01,"apply_to_click_rate_growth_rate":0.04,"approval_rate_difference":-0.06,"approval_rate_growth_rate":-0.1,"approvals_difference":177,"approvals_growth_rate":0.25,"clicks_difference":1686,"clicks_growth_rate":0.34,"conversion_rate_difference":-0.01,"conversion_rate_growth_rate":-0.07,"last_period_Applications":1208,"last_period_Apply_to_click_rate":0.25,"last_period_Approval_rate":0.59,"last_period_Approvals":709,"last_period_Conversion_rate":0.14,"last_period_num_clicks":4902,"publisher_key":2681697,"publisher_name":"Rakuten Marketing Test Publisher 11","rank":8,"this_period_Applications":1684,"this_period_Apply_to_click_rate":0.26,"this_period_Approval_rate":0.53,"this_period_Approvals":886,"this_period_Conversion_rate":0.13,"this_period_num_clicks":6588},
    {"advertiser_key":37584,"application_difference":442,"application_growth_rate":0.35,"apply_to_click_rate_difference":0,"apply_to_click_rate_growth_rate":0,"approval_rate_difference":-0.04,"approval_rate_growth_rate":-0.07,"approvals_difference":184,"approvals_growth_rate":0.26,"clicks_difference":1755,"clicks_growth_rate":0.36,"conversion_rate_difference":-0.01,"conversion_rate_growth_rate":-0.07,"last_period_Applications":1246,"last_period_Apply_to_click_rate":0.26,"last_period_Approval_rate":0.56,"last_period_Approvals":700,"last_period_Conversion_rate":0.14,"last_period_num_clicks":4855,"publisher_key":1438184,"publisher_name":"Rakuten Advertising Test Publisher 5","rank":9,"this_period_Applications":1688,"this_period_Apply_to_click_rate":0.26,"this_period_Approval_rate":0.52,"this_period_Approvals":884,"this_period_Conversion_rate":0.13,"this_period_num_clicks":6610},
    {"advertiser_key":37584,"application_difference":960,"application_growth_rate":0.37,"apply_to_click_rate_difference":0.01,"apply_to_click_rate_growth_rate":0.02,"approval_rate_difference":-0.06,"approval_rate_growth_rate":-0.11,"approvals_difference":324,"approvals_growth_rate":0.23,"clicks_difference":3382,"clicks_growth_rate":0.34,"conversion_rate_difference":-0.01,"conversion_rate_growth_rate":-0.09,"last_period_Applications":2570,"last_period_Apply_to_click_rate":0.26,"last_period_Approval_rate":0.56,"last_period_Approvals":1437,"last_period_Conversion_rate":0.15,"last_period_num_clicks":9886,"publisher_key":2013923,"publisher_name":"Rakuten Advertising Test Publisher 1","rank":10,"this_period_Applications":3530,"this_period_Apply_to_click_rate":0.27,"this_period_Approval_rate":0.5,"this_period_Approvals":1761,"this_period_Conversion_rate":0.13,"this_period_num_clicks":13268}
]


export const SecondHistogram = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const padding = 50;

    useEffect(() => {
        const box = d3.select("#histogram")._groups[0][0];
        console.log('offsetWidth ' , box.offsetWidth);
        setWidth(box.offsetWidth)
        setHeight(box.offsetHeight)



    }, []);

    useEffect(() => {
        console.log('useEffect ')
        if (width > 0) {
            const marginTop = 30;
            const marginRight = 0;
            const marginBottom = 30;
            const marginLeft = 40;
            console.log('-------',JSON.stringify(dataInc));
            // Declare the x (horizontal position) scale.
            const x = d3.scaleBand()
                .domain(d3.groupSort(dataInc, ([d]) => -d.application_difference, (d) => d.publisher_name)) // descending frequency
                .range([marginLeft, width - marginRight])
                .padding(0.1);

            // Declare the y (vertical position) scale.
            const y = d3.scaleLinear()
                .domain([0, d3.max(dataInc, (d) => d.application_difference)])
                .range([height - marginBottom, marginTop]);

            // Create the SVG container.

            const svg = d3.select("#histogram")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .attr("style", "max-width: 100%; height: auto;");

            // Add a rect for each bar.
            svg.append("g")
                .attr("fill", "rgb(139, 202, 47)")
                .selectAll()
                .data(dataInc)
                .join("rect")
                // .attr("id", "customTooltip")
                .attr("x", (d) => x(d.publisher_name))
                .attr("y", (d) => y(d.application_difference))
                .attr("height", (d) => y(0) - y(d.application_difference))
                .attr("width", x.bandwidth());
            // Add a rect for each bar.
            // svg.append("g")
            //     .attr("fill", "rgb(117, 117, 117)")
            //     .attr("opacity", "0.3")
            //     // .attr("visibility", "hidden")
            //     .selectAll()
            //     .data(dataInc)
            //     .join("rect")
            //     .attr("id", "customTooltip")
            //     .attr("x", (d) => x(d.publisher_name))
            //     .attr("y", 0)
            //     .attr("height", height - ( marginBottom))
            //     .attr("width", x.bandwidth() + 9);

            // Add the x-axis and label.
            svg.append("g")
                .attr("transform", `translate(0,${height - marginBottom})`)
                .call(d3.axisBottom(x).tickSizeOuter(0));


            var Tooltip = d3.select("#div_template")
                .append("div")
                .attr("class", "tooltip")
                .style("padding", "5px")

            var mouseover = function(d) {

                d3.select(this)
                    .style("stroke", "black")
                    .attr("opacity", "0.3")

            }

            var mousemove = function(d) {
                console.log('mousemove ', d)
                Tooltip
                    .html("The exact value of<br>this cell is: " + d.value)
                    .style("left", (d3.pointer(this)[0]+70) + "px")
                    .style("top", (d3.pointer(this)[1]) + "px")
            }

            var mouseleave = function(d) {
                Tooltip
                    .attr("opacity", "0")
                d3.select(this)
                    .attr("opacity", "0")
                    .style("stroke", "none")
            }

               svg.selectAll()
                .data(dataInc)
                .enter()
                .append("rect")
                   .attr("x", (d) => x(d.publisher_name))
                   .attr("y", 0)
                   .attr("height", height - ( marginBottom))
                   .attr("width", x.bandwidth() + 9)

                .attr("fill", "rgb(117, 117, 117)")
                .attr("opacity", "0")
                .style("stroke-width", 4)
                .style("stroke", "none")

                .on("mouseover", mouseover)
                .on("mousemove", mousemove)
                .on("mouseleave", mouseleave)


            // d3.select("#customTooltip")
            //     .on("mouseover", function(){return tooltip2.style("visibility", "visible");})
            //     .on("mousemove", function(event){
            //         console.log("event ", event)
            //         return tooltip2.style("top", (0)+"px").style("left",(event.pageX)+"px");})
            //     .on("mouseout", function(){return tooltip2.style("visibility", "hidden");});


        }


    }, [width]);


    // const histogram = d3.layout.histogram().bin



};
