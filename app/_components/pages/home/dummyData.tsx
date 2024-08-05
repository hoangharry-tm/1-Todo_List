interface TaskCardInfo {
  name: string;
  desc?: string;
}

export let dummyData: TaskCardInfo[] = [
  {
    name: "Do the homework",
    desc: "Have to do the homework for a Math class",
  },
  {
    name: "Have a shower!",
  },
  {
    name: "Have a test for tomorow so I better do it! Learning, learning, let's go!",
  },
  {
    name: "Doing some magic here",
    desc: "I want to learn some magic so I should buy a magic kit and then learn how to use it! Apart from that, I will also practice days and nights",
  },
  {
    name: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    desc: "Lorem Ipsum test",
  },
  {
    name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    desc: "Lorem Ipsum test",
  },
  {
    name: "Doing some magic here",
    desc: "I want to learn some magic so I should buy a magic kit and then learn how to use it! Apart from that, I will also practice days and nights",
  },
  {
    name: "Doing some magic here",
    desc: "I want to learn some magic so I should buy a magic kit and then learn how to use it! Apart from that, I will also practice days and nights",
  },
  {
    name: "Doing some magic here",
    desc: "I want to learn some magic so I should buy a magic kit and then learn how to use it! Apart from that, I will also practice days and nights",
  },
];

export default function setData(data: TaskCardInfo) {
  return dummyData.push(data);
}
