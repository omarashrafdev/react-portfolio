import React from 'react'
import './services.css'
import {GoPrimitiveDot} from 'react-icons/go'


export default function Services() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Servcies</h2>

        <div className="container services__container">
          <article className='service'>
            <div className='service__head'>
              <h3>UI/UX Design</h3>
            </div>

            <ul className='service__list'>
              <li>
                <GoPrimitiveDot className='service__list-icon' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <GoPrimitiveDot className='service__list-icon' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <GoPrimitiveDot className='service__list-icon' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <GoPrimitiveDot className='service__list-icon' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article>
          <article className='service'>
            <div className='service__head'>
              <h3>Web Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <GoPrimitiveDot className='service__list-icon' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <GoPrimitiveDot className='service__list-icon' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <GoPrimitiveDot className='service__list-icon' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <GoPrimitiveDot className='service__list-icon' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article>
          <article className='service'>
            <div className='service__head'>
              <h3>Content Creation</h3>
            </div>

            <ul className='service__list'>
              <li>
                <GoPrimitiveDot className='service__list-icon' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <GoPrimitiveDot className='service__list-icon' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <GoPrimitiveDot className='service__list-icon' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <GoPrimitiveDot className='service__list-icon' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    )
}