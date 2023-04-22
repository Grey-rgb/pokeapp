import "../styles/About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="about-container">
        <h2>About my pokedex: </h2>
      </div>
      <div>
        <div className="route-link-container">
          <Link to={"/"}>
            <button onClick={changeBackground}>Pokedex</button>
          </Link>
        </div>
      </div>

      <div className="about-desc">
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          molestie ante non velit posuere, at ullamcorper erat porttitor. Aenean
          aliquam, dolor vitae egestas vulputate, tortor risus tempor ex,
          finibus euismod ipsum odio rutrum est. Curabitur ut felis quis massa
          ullamcorper aliquet. In a pellentesque risus. Fusce hendrerit volutpat
          sapien nec scelerisque. Mauris eu commodo purus. Proin ex mi, finibus
          sit amet consequat dapibus, suscipit ac metus. Mauris maximus volutpat
          nunc, nec condimentum sem laoreet sit amet. Sed tincidunt tincidunt
          blandit. Etiam dignissim risus vel velit lacinia tincidunt eu vel
          sapien. Nunc tristique nulla at est tempor tristique. Fusce convallis,
          nisl quis vulputate euismod, est libero consequat lacus, eget
          malesuada est ex at ex.
        </h4>
      </div>
    </>
  );

  function changeBackground() {
    document.body.style.backgroundImage =
      "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7d0ad6d-8109-4e1c-aa4c-8a27833f1034/dfbxi4z-17d05efe-b453-447f-8192-860bc5ad2566.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E3ZDBhZDZkLTgxMDktNGUxYy1hYTRjLThhMjc4MzNmMTAzNFwvZGZieGk0ei0xN2QwNWVmZS1iNDUzLTQ0N2YtODE5Mi04NjBiYzVhZDI1NjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XwpwXz_OIBIWJeI_mgAYX6KHmjQqBhbXksdKgPrcbsM)";
  }
}
