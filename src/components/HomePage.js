import React, {useEffect} from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import { supabase } from "../config"; 

const HomePage = () => {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        // Redirect to the homepage
        // alert("Signed in!")
        const {
          data: { user },
        } = await supabase.auth.getUser();

        const { data: existingUser, error: fetchError } = await supabase
          .from("users")
          .select("*")
          .eq("uuid", user.id)
          .single();

        const [f_name, l_name] = user.user_metadata.full_name.split(" ");

        if (!existingUser) {
          // put the new user in our database
          const { error: insertError } = await supabase.from("users").insert({
            uuid: user.id,
            email: user.email,
            f_name: f_name,
            l_name: l_name,
            high_score: 0,
            created_at: new Date().toISOString(),
          });

          if (insertError) {
            console.error("Error inserting user:", insertError);
          }
        }
      }
    });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Welcome to the Number Sense Trainer</h1>
      <p>
        This webapp was built to train the next generation for mental math
        competitions. My goal is to give you a resource that lets test your
        skills endlessly.{" "}
      </p>

      <div className="row mt-5 mb-5">
        {/* Practice Section */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h2 className="mb-3 text-center">Learn</h2>
          <p className="mb-4 text-center">
            Want to learn some tricks to get faster? Check out the Learning tab
            for popular tricks as well as other resources like Bryant Heath's
            book:
          </p>
          <Link to="/learning" className="btn btn-primary btn-lg mb-4">
            Learn!
          </Link>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h2 className="mb-3 text-center">Practice</h2>
          <p className="mb-4 text-center">
            Want to take a randomly generated exam? Or practice a specific skill
            that you want to improve? Check out the Practice Page:
          </p>
          <Link to="/practice" className="btn btn-primary btn-lg mb-4">
            Train!
          </Link>
        </div>

        {/* Learn Section */}
      </div>
    </div>
  );
};

export default HomePage;
