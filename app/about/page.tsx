import Image from "next/image";

const profiles = [
  {
    name: "Jayson Tatum",
    role: "Editor",
    description:
      "Integer gravida finibus enim nec finibus. Duis sit amet dui sed tortor vehicula imperdiet. Curabitur eleifend in nunc nec lacinia. Sed mollis, diam et laoreet consectetur, mauris ligula tincidunt justo, ac varius velit odio eget libero. Integer vitae posuere massa. Nunc vulputate iaculis vestibulum. Proin in mollis purus, id eleifend est. Duis finibus tortor quis felis volutpat malesuada. Suspendisse suscipit, augue non hendrerit volutpat, orci dui molestie ex, id finibus sem lectus et sapien. Donec dictum leo a lectus laoreet, non eleifend urna pulvinar. Nam elit nulla, cursus in commodo et, tristique quis nulla. Vestibulum elementum in nunc quis dignissim. Fusce sollicitudin bibendum quam. In hac habitasse platea dictumst. Nullam a cursus tellus, at mattis augue. In quis nisl malesuada, vehicula enim vitae, venenatis ex.",
    img: "/32637397_7729085.jpg",
    altImg: "JT pic",
  },
  {
    name: "Jaylen Brown",
    role: "Editor",
    description:
      "Ut egestas laoreet elit. Vivamus ut purus hendrerit, faucibus urna eget, faucibus ante. Pellentesque in purus sem. Nullam quis erat quis augue auctor varius. Pellentesque semper est sed tincidunt sodales. Sed interdum risus sed pretium vehicula. Praesent scelerisque sem vel lacus interdum commodo. Donec efficitur quam ac justo eleifend ultricies. Morbi dictum risus eu viverra pulvinar. Vivamus consequat leo felis, eu efficitur metus luctus vitae. Donec molestie sem sed dictum placerat. Nullam tempor, sem nec dictum convallis, leo urna vestibulum turpis, ac tristique risus justo eget neque. Etiam ac dolor ultricies, commodo velit commodo, rhoncus tellus. Maecenas id nulla neque. Cras vitae velit tincidunt, luctus sem quis, luctus enim. Praesent euismod eleifend nunc, vel rutrum quam semper sit amet.",
    img: "/32637409_7782422.jpg",
    altImg: "JB pic",
  },
  {
    name: "Derrick White",
    role: "Editor",
    description:
      "Maecenas sed finibus mi. Fusce iaculis mi ut ultrices imperdiet. Proin imperdiet aliquet sem, et laoreet orci mattis sed. Donec porttitor, nisl eget tempus egestas, odio odio vehicula metus, eget iaculis leo libero eget tortor. Donec sit amet pretium eros, sit amet vehicula eros. Donec non dolor vel leo ultrices ultrices. Ut placerat diam et elit consectetur sollicitudin. Donec ac leo posuere, volutpat lectus vitae, mattis nisi. Aliquam libero urna, pretium vitae eleifend ac, fermentum lobortis libero. Donec quam dui, fermentum in massa et, molestie mattis lacus. Phasellus commodo id ante ac auctor. Sed vehicula augue sed turpis sollicitudin facilisis.",
    img: "/32637402_7788954.jpg",
    altImg: "DW pic",
  },
  {
    name: "Jrue Holiday",
    role: "Sound Engineer",
    description:
      "Cras odio dui, tincidunt vitae ex vitae, dictum volutpat dolor. Maecenas id ligula lectus. Nam dictum tempor eros consequat mollis. Suspendisse tristique neque at elit vehicula malesuada. Aenean ac facilisis arcu. Maecenas ullamcorper mi a ipsum auctor pulvinar. Aenean tincidunt orci vitae urna feugiat bibendum. Suspendisse potenti. Duis justo libero, sodales at vestibulum eget, tincidunt vel erat. Quisque fringilla non eros id suscipit. Cras vitae pulvinar urna. Aliquam a malesuada tortor. Ut sit amet pretium nulla, ut vehicula felis.",
    img: "/32637410_7783092.jpg",
    altImg: "JH pic",
  },
  {
    name: "Kristaps Porziņģis",
    role: "IT guy",
    description:
      "Nulla facilisi. Maecenas mattis pretium neque ut tincidunt. Nunc aliquet, diam id lacinia pulvinar, ex nisl suscipit diam, ullamcorper finibus diam leo vel enim. Suspendisse potenti. Vestibulum blandit ex est, sed vehicula sapien sagittis non. Pellentesque placerat sem eget congue vestibulum. Cras at placerat purus. Proin finibus neque id aliquet pulvinar.",
    img: "/33813620_7736810.jpg",
    altImg: "KP pic",
  },
];

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-8 items-center justify-center w-[80vw] mt-[20vh] mb-[10vh]">
        <h2 className="text-4xl">Meet the Book Worms!</h2>
        <ul className="flex flex-col justify-center">
          {profiles.map((el) => (
            <li key={el.img} className="w-3/4 h-[30vh] flex">
              <div className="w-2/4 h-full relative overflow-hidden circle">
                <Image
                  alt={el.altImg}
                  src={el.img}
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-2/4 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold">{el.name}</h3>
                <h4 className="text-lg font-semibold">{el.role}</h4>
                <p>{el.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
