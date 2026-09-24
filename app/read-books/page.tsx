"use client";
import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from "recharts";
import { BooksContext } from "../context/BooksContext";
import { BookData } from "../types/type";
// import { RechartsDevtools } from '@recharts/devtools';

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

// #endregion
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

const ReadBookCharts = () => {
  // #region Sample data
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book: BookData, index: number) => {
    return {
      name: book.bookName,
      uv: book.totalPages,
      pv: index + 1,
      amt: index + 1,
    };
  });
  return (
    <div className="container mx-auto my-6">
      {readBooks.length > 0 ? (
        <div className="flex min-h-[70vh] w-full items-center justify-center px-4">
          <div className="w-full max-w-6xl overflow-x-auto">
            <BarChart
              style={{
                width: "100%",
                height: "70vh",
                minHeight: "400px",
              }}
              responsive
              data={data}
              margin={{
                top: 30,
                right: 20,
                left: 10,
                bottom: 30,
              }}
            >
              <CartesianGrid />

              <Tooltip cursor={{ fillOpacity: 0.1 }} />

              <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} />

              <YAxis width="auto" />

              <Bar dataKey="uv" shape={TriangleBar} activeBar>
                <LabelList content={CustomColorLabel} position="top" />
              </Bar>
            </BarChart>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[400px] items-center justify-center px-4">
          <div className="w-full max-w-lg rounded-3xl border border-base-300 bg-base-100 p-8 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-4xl">
              📚
            </div>

            <h2 className="mt-6 text-2xl font-bold">No Read Books Yet</h2>

            <p className="mt-3 text-base-content/60">
              Start reading some books and your reading statistics will appear
              here.
            </p>

            <button className="btn btn-primary mt-6 rounded-xl">
              📖 Explore Books
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadBookCharts;
