import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

import { HeaderCSS, Ul, Principal, Form } from './style';
import data from './data';

export default function Navbar({ home, req, input }) {
  return (
    <HeaderCSS>
      <Principal className="nav-menu">
        <Link href="/">
          <h3>PetLovers</h3>
        </Link>
      </Principal>
      {home ? (
        <Form>
          <input
            onKeyPress={e => {
              // eslint-disable-next-line no-unused-expressions
              e.key === 'Enter' && e.preventDefault();
            }}
            placeholder="Ex: duck"
            onChange={input}
          />
          <button
            type="button"
            onClick={req}
            class="btn btn--primary btn--inside"
          >
            Buscar
          </button>
        </Form>
      ) : (
        ''
      )}
      <div>
        <Ul>
          {data.map(item => {
            return (
              <li className="activ">
                <Link href={`/${item.href}`} key={item.id}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="/create">
              <FontAwesomeIcon className="icon" icon={faPlus} />
            </Link>
          </li>
          <li>
            <Link href="/fav">
              <FontAwesomeIcon className="icon mobile" icon={faStar} />
            </Link>
          </li>
        </Ul>
      </div>
    </HeaderCSS>
  );
}
