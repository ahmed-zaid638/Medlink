
import Button from '../components/common/Button';
import Header from '../components/layout/Header';

const Home = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div>
            <Header />
            <main className="p-6">
                <h2 className="text-2xl mb-4">Welcome to My Next.js Template</h2>
                <Button label="Click Me" onClick={handleClick} />
            </main>
        </div>
    );
};

export default Home;
