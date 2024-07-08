interface propTypes {
  review: string;
}

export default function Review({ review }: propTypes) {
  return (
    <>
      <span className="mt-4 text-lg font-semibold text-gray-100">review</span>
      <p className="whitespace-pre-wrap text-beige-100 break-keep">{review}</p>
    </>
  );
}
