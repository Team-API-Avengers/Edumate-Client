import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = ({ blogs }) => {
  return (
    <div>
      <h1 className="text-5xl font-bold">
        Popular <span className="border-b-8 border-blue-600">Articles</span>
      </h1>
      {/* {blogs?.map((blog) => ( */}
      <div class=" w-full max-w-screen-xl px-5 py-24 mx-auto lg:px-32">
        <div class="flex flex-col w-full mx-auto mb-2 prose text-left prose-md">
          <div class="mb-5 border-b border-gray-200">
            <div class="flex justify-between items-baseline -mt-2">
              <div className="flex ">
                <div className="avatar">
                  <div className="w-12 mr-5 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
                    <img src="https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg" />
                  </div>
                </div>
                <div>
                  <p className="font-bold">Ahmed Zaid</p>
                  <p>Web Developer</p>
                </div>
              </div>
              <h5>12-03-2021</h5>
            </div>
          </div>
          <h1 className="text-4xl  font-bold">
            Page transitions are a fundamental part of website navigation and
            user experience.
          </h1>

          <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ex
            molestiae eum sequi incidunt amet rem aperiam possimus explicabo
            sit. Perspiciatis iusto minima sed unde tenetur reprehenderit
            aliquam ex? Nemo doloremque maiores laboriosam architecto esse
            dignissimos culpa aliquid quo voluptatem, rerum iste, itaque
            corporis, ab nostrum expedita iure? Velit reprehenderit illum quae
            asperiores dicta labore at alias sint fugiat saepe quisquam
            reiciendis architecto, nam similique id accusantium earum totam esse
            beatae corporis aspernatur numquam voluptas facere. Sit, voluptas
            voluptatibus ullam qui deleniti hic aperiam dignissimos tenetur
            possimus eos dicta labore ipsum dolore magni dolorem perspiciatis
            asperiores cum assumenda libero eum consequuntur ut quasi saepe?
            Expedita optio, reprehenderit velit animi, odit amet soluta ipsam,
            molestias distinctio ea doloremque commodi enim. Non, similique.
            Commodi, totam doloribus? Quam in nesciunt molestias sint iusto
            sapiente harum adipisci iste cupiditate aliquid quia ad error odio,
            fugit quaerat eligendi. Omnis corporis consequatur veritatis
            laudantium reprehenderit iure aliquam! Sequi perspiciatis, error
            iste incidunt velit modi odit aspernatur obcaecati nisi rem nam
            facilis quia repellat corporis tenetur quos eos non nostrum!
            Necessitatibus aperiam, maxime reiciendis error quibusdam doloribus
            ipsam pariatur totam obcaecati. Similique voluptatem ad itaque
            beatae dolores! Quas error similique praesentium consectetur eum
            assumenda eaque aliquid. Pariatur libero soluta inventore culpa
            expedita tenetur deleniti dolorum delectus, neque ad, distinctio
            magnam repudiandae sunt illo provident fugit odio incidunt facere
            ullam ipsam corporis quasi earum aliquid amet. Ducimus, sed libero
            odit temporibus sapiente commodi. Optio itaque, pariatur eveniet
            ducimus provident a vero dignissimos placeat neque repudiandae animi
            soluta sunt quibusdam porro quos tempore alias ab culpa magni
            quisquam? Quasi sequi vero exercitationem cum? Numquam ipsum natus
            voluptatum exercitationem beatae inventore, vero tempore aliquid
            consequuntur repudiandae? Obcaecati ab voluptatum saepe iure
            aspernatur vero minus, a dolorem esse molestias officia laudantium
            consectetur odio, voluptatibus non beatae dolores accusantium
            dolorum maxime possimus!
          </p>
          <Link to={"/blog"}>
            <button className="px-12  mt-10 py-3 border-black bg-blue-600 rounded text-white">
              Go back
            </button>
          </Link>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default BlogDetails;
