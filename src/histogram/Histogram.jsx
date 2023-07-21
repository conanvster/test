import { useMemo } from "react";
import * as d3 from "d3";

const BUCKET_PADDING = 3;
export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export const Histogram = () => {
    const width=400, height=400;
    const xScale = useMemo(() => {
        return d3
            .scaleLinear()
            .domain([0, 10])
            .range([10, width - 10]);
    }, [width]);

    const buckets = useMemo(() => {
        const bucketGenerator = d3
            .bin()
            .value((d) => d)
            .domain([0, 15])

        console.log('data ', data)
        console.log('bucketGenerator ', bucketGenerator(data))

        return bucketGenerator(data);
    }, [xScale]);

    const yScale = useMemo(() => {
        const max = Math.max(...buckets.map((bucket) => bucket?.length));
        console.log('max ', max)
        return d3.scaleLinear().range([height, 0]).domain([0, max]);
    }, [data, height]);

    console.log('buckets ', buckets)
    const allRects = buckets.map((bucket, i) => {
        console.log('bucket ', bucket, i)
        console.log('width ', xScale(bucket.x1) - xScale(bucket.x0) - BUCKET_PADDING)
        if (bucket.x0 == undefined || bucket.x1 == undefined) {
            return null;
        }
        return (
            <rect
                key={i}
                fill="#69b3a2"
                stroke="black"
                x={xScale(bucket.x0) + BUCKET_PADDING / 2}
                width={xScale(bucket.x1) - xScale(bucket.x0) - BUCKET_PADDING}
                y={yScale(bucket.length)}
                height={height - yScale(bucket.length)}
            />
        );
    });

    return (
        <svg width={width} height={height}>
            {allRects}
        </svg>
    );
};
