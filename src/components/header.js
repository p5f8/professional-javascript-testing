import React from 'react'
import { Link } from 'gatsby'
import {css} from 'emotion'

const Header = ({ siteTitle }) => (
  <div className={css({
    background: '#f8f8f8',
  })}>
    <section className={css({
      width: '100%',
      padding: '1rem 0',
    })}>
      <div className={css({
        margin: '0 auto',
        maxWidth: 960,
        padding: '0 1rem',
      })}>
        <div className={css({
          width: '100%',
          display: 'flex',
        })}>
          <Link
            to="/"
            className={css({
              textDecoration: 'none',
            })}
          >
            Professional Javascript Testing
            <br />
            <i>with Kent C. Dodds</i>
          </Link>
          <div className={css({
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          })}>
            nav links
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Header
