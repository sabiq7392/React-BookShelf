import IncompleteBookShelf from './_incompleteBookShelf';
import CompleteBookShelf from './_completeBookShelf';

export default function Main() {
  return (
    <main className="container">
      <IncompleteBookShelf />
      <CompleteBookShelf />
    </main>
  );
}
