

import { Footer } from 'flowbite-react';
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaCartPlus, FaDribbble } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MyFooter = () => {
  return (
    <Footer className='bg-blue-100'>
      <div className="w-full px-4 lf:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-3">
          <div>
          <div>
              <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
              <FaCartPlus className="inline-block text-4xl" />
              <p className="text-3xl">MedAdept</p>
            </Link>
          </div>
          </div>
         
          <div>
            <Footer.Title title="quick links" />
            <Footer.LinkGroup col>
              <Footer.Link href="/about">
                About
              </Footer.Link>
              <Footer.Link href="/shop">
                Shop
              </Footer.Link>
              {/* <Footer.Link href="/admin/dashboard">
                Sell your Medicine
              </Footer.Link> */}
              <Footer.Link href="/blog">
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          
          <div>
            <Footer.Title title="contact info" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                +92xxxxxxxxx
              </Footer.Link>
              <Footer.Link href="#">
                info.medAdept2023@gmail.com 
              </Footer.Link>
              <Footer.Link href="#">
                Lahore, Pakistan
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 lf:px-24 sm:flex sm:items-center sm:justify-between ">
          <Footer.Copyright
            by="MedAdept™"
            href="/"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
            <Footer.Icon
              href="#"
              icon={FaDribbble}
            />
          </div>
        </div>
      </div>
    </Footer>

  )
}

export default MyFooter