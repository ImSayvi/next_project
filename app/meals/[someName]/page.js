export default function MealDetailPage({ params }) {
  const { someName } = params;

  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        {someName}
      </h1>
    </main>
  );
}
