import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h2>Navbar</h2>

        <div className='navContent'>
          <div className='navLinks'>
            <Link to='/'>Posts</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
