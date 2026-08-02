import NewTaskForm from "./components/NewTaskForm";
import TaskLIst from "./components/TaskLIst";
import Task from "./components/Task";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";
function App() {
  const All = [
    {
      userId: 1,
      id: 1,
      description: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      description: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      description: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      description: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      description:
        "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      description: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      description: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      description: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      description: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      description: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
    {
      userId: 1,
      id: 11,
      description: "vero rerum temporibus dolor",
      completed: true,
    },
    {
      userId: 1,
      id: 12,
      description: "ipsa repellendus fugit nisi",
      completed: true,
    },
    {
      userId: 1,
      id: 13,
      description: "et doloremque nulla",
      completed: false,
    },
    {
      userId: 1,
      id: 14,
      description: "repellendus sunt dolores architecto voluptatum",
      completed: true,
    },
    {
      userId: 1,
      id: 15,
      description: "ab voluptatum amet voluptas",
      completed: true,
    },
    {
      userId: 1,
      id: 16,
      description: "accusamus eos facilis sint et aut voluptatem",
      completed: true,
    },
    {
      userId: 1,
      id: 17,
      description: "quo laboriosam deleniti aut qui",
      completed: true,
    },
    {
      userId: 1,
      id: 18,
      description: "dolorum est consequatur ea mollitia in culpa",
      completed: false,
    },
    {
      userId: 1,
      id: 19,
      description: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      completed: true,
    },
    {
      userId: 1,
      id: 20,
      description: "ullam nobis libero sapiente ad optio sint",
      completed: true,
    },
    {
      userId: 2,
      id: 21,
      description: "suscipit repellat esse quibusdam voluptatem incidunt",
      completed: false,
    },
    {
      userId: 2,
      id: 22,
      description: "distinctio vitae autem nihil ut molestias quo",
      completed: true,
    },
    {
      userId: 2,
      id: 23,
      description: "et itaque necessitatibus maxime molestiae qui quas velit",
      completed: false,
    },
    {
      userId: 2,
      id: 24,
      description: "adipisci non ad dicta qui amet quaerat doloribus ea",
      completed: false,
    },
    {
      userId: 2,
      id: 25,
      description: "voluptas quo tenetur perspiciatis explicabo natus",
      completed: true,
    },
    {
      userId: 2,
      id: 26,
      description: "aliquam aut quasi",
      completed: true,
    },
    {
      userId: 2,
      id: 27,
      description: "veritatis pariatur delectus",
      completed: true,
    },
    {
      userId: 2,
      id: 28,
      description: "nesciunt totam sit blanditiis sit",
      completed: false,
    },
    {
      userId: 2,
      id: 29,
      description: "laborum aut in quam",
      completed: false,
    },
    {
      userId: 2,
      id: 30,
      description:
        "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
      completed: true,
    },
    {
      userId: 2,
      id: 31,
      description: "repudiandae totam in est sint facere fuga",
      completed: false,
    },
    {
      userId: 2,
      id: 32,
      description: "earum doloribus ea doloremque quis",
      completed: false,
    },
    {
      userId: 2,
      id: 33,
      description: "sint sit aut vero",
      completed: false,
    },
    {
      userId: 2,
      id: 34,
      description: "porro aut necessitatibus eaque distinctio",
      completed: false,
    },
    {
      userId: 2,
      id: 35,
      description: "repellendus veritatis molestias dicta incidunt",
      completed: true,
    },
    {
      userId: 2,
      id: 36,
      description:
        "excepturi deleniti adipisci voluptatem et neque optio illum ad",
      completed: true,
    },
    {
      userId: 2,
      id: 37,
      description: "sunt cum tempora",
      completed: false,
    },
    {
      userId: 2,
      id: 38,
      description: "totam quia non",
      completed: false,
    },
    {
      userId: 2,
      id: 39,
      description:
        "doloremque quibusdam asperiores libero corrupti illum qui omnis",
      completed: false,
    },
    {
      userId: 2,
      id: 40,
      description: "totam atque quo nesciunt",
      completed: true,
    },
    {
      userId: 3,
      id: 41,
      description:
        "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
      completed: false,
    },
    {
      userId: 3,
      id: 42,
      description: "rerum perferendis error quia ut eveniet",
      completed: false,
    },
    {
      userId: 3,
      id: 43,
      description: "tempore ut sint quis recusandae",
      completed: true,
    },
    {
      userId: 3,
      id: 44,
      description:
        "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
      completed: true,
    },
    {
      userId: 3,
      id: 45,
      description: "velit soluta adipisci molestias reiciendis harum",
      completed: false,
    },
    {
      userId: 3,
      id: 46,
      description: "vel voluptatem repellat nihil placeat corporis",
      completed: false,
    },
    {
      userId: 3,
      id: 47,
      description: "nam qui rerum fugiat accusamus",
      completed: false,
    },
    {
      userId: 3,
      id: 48,
      description: "sit reprehenderit omnis quia",
      completed: false,
    },
    {
      userId: 3,
      id: 49,
      description:
        "ut necessitatibus aut maiores debitis officia blanditiis velit et",
      completed: false,
    },
    {
      userId: 3,
      id: 50,
      description: "cupiditate necessitatibus ullam aut quis dolor voluptate",
      completed: true,
    },
    {
      userId: 3,
      id: 51,
      description: "distinctio exercitationem ab doloribus",
      completed: false,
    },
    {
      userId: 3,
      id: 52,
      description: "nesciunt dolorum quis recusandae ad pariatur ratione",
      completed: false,
    },
    {
      userId: 3,
      id: 53,
      description: "qui labore est occaecati recusandae aliquid quam",
      completed: false,
    },
    {
      userId: 3,
      id: 54,
      description: "quis et est ut voluptate quam dolor",
      completed: true,
    },
    {
      userId: 3,
      id: 55,
      description:
        "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
      completed: true,
    },
    {
      userId: 3,
      id: 56,
      description: "deleniti ea temporibus enim",
      completed: true,
    },
    {
      userId: 3,
      id: 57,
      description:
        "pariatur et magnam ea doloribus similique voluptatem rerum quia",
      completed: false,
    },
    {
      userId: 3,
      id: 58,
      description: "est dicta totam qui explicabo doloribus qui dignissimos",
      completed: false,
    },
    {
      userId: 3,
      id: 59,
      description:
        "perspiciatis velit id laborum placeat iusto et aliquam odio",
      completed: false,
    },
    {
      userId: 3,
      id: 60,
      description: "et sequi qui architecto ut adipisci",
      completed: true,
    },
    {
      userId: 4,
      id: 61,
      description: "odit optio omnis qui sunt",
      completed: true,
    },
    {
      userId: 4,
      id: 62,
      description: "et placeat et tempore aspernatur sint numquam",
      completed: false,
    },
    {
      userId: 4,
      id: 63,
      description: "doloremque aut dolores quidem fuga qui nulla",
      completed: true,
    },
    {
      userId: 4,
      id: 64,
      description: "voluptas consequatur qui ut quia magnam nemo esse",
      completed: false,
    },
    {
      userId: 4,
      id: 65,
      description: "fugiat pariatur ratione ut asperiores necessitatibus magni",
      completed: false,
    },
    {
      userId: 4,
      id: 66,
      description: "rerum eum molestias autem voluptatum sit optio",
      completed: false,
    },
    {
      userId: 4,
      id: 67,
      description:
        "quia voluptatibus voluptatem quos similique maiores repellat",
      completed: false,
    },
    {
      userId: 4,
      id: 68,
      description: "aut id perspiciatis voluptatem iusto",
      completed: false,
    },
    {
      userId: 4,
      id: 69,
      description:
        "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
      completed: false,
    },
    {
      userId: 4,
      id: 70,
      description: "ut sequi accusantium et mollitia delectus sunt",
      completed: false,
    },
    {
      userId: 4,
      id: 71,
      description: "aut velit saepe ullam",
      completed: false,
    },
    {
      userId: 4,
      id: 72,
      description:
        "praesentium facilis facere quis harum voluptatibus voluptatem eum",
      completed: false,
    },
    {
      userId: 4,
      id: 73,
      description: "sint amet quia totam corporis qui exercitationem commodi",
      completed: true,
    },
    {
      userId: 4,
      id: 74,
      description: "expedita tempore nobis eveniet laborum maiores",
      completed: false,
    },
    {
      userId: 4,
      id: 75,
      description: "occaecati adipisci est possimus totam",
      completed: false,
    },
    {
      userId: 4,
      id: 76,
      description: "sequi dolorem sed",
      completed: true,
    },
    {
      userId: 4,
      id: 77,
      description:
        "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
      completed: false,
    },
    {
      userId: 4,
      id: 78,
      description:
        "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
      completed: false,
    },
    {
      userId: 4,
      id: 79,
      description: "eum ipsa maxime ut",
      completed: true,
    },
    {
      userId: 4,
      id: 80,
      description:
        "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
      completed: true,
    },
    {
      userId: 5,
      id: 81,
      description: "suscipit qui totam",
      completed: true,
    },
    {
      userId: 5,
      id: 82,
      description: "voluptates eum voluptas et dicta",
      completed: false,
    },
    {
      userId: 5,
      id: 83,
      description: "quidem at rerum quis ex aut sit quam",
      completed: true,
    },
    {
      userId: 5,
      id: 84,
      description: "sunt veritatis ut voluptate",
      completed: false,
    },
    {
      userId: 5,
      id: 85,
      description: "et quia ad iste a",
      completed: true,
    },
    {
      userId: 5,
      id: 86,
      description: "incidunt ut saepe autem",
      completed: true,
    },
    {
      userId: 5,
      id: 87,
      description: "laudantium quae eligendi consequatur quia et vero autem",
      completed: true,
    },
    {
      userId: 5,
      id: 88,
      description:
        "vitae aut excepturi laboriosam sint aliquam et et accusantium",
      completed: false,
    },
    {
      userId: 5,
      id: 89,
      description: "sequi ut omnis et",
      completed: true,
    },
    {
      userId: 5,
      id: 90,
      description: "molestiae nisi accusantium tenetur dolorem et",
      completed: true,
    },
    {
      userId: 5,
      id: 91,
      description: "nulla quis consequatur saepe qui id expedita",
      completed: true,
    },
    {
      userId: 5,
      id: 92,
      description: "in omnis laboriosam",
      completed: true,
    },
    {
      userId: 5,
      id: 93,
      description:
        "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
      completed: true,
    },
    {
      userId: 5,
      id: 94,
      description: "facilis modi saepe mollitia",
      completed: false,
    },
    {
      userId: 5,
      id: 95,
      description: "vel nihil et molestiae iusto assumenda nemo quo ut",
      completed: true,
    },
    {
      userId: 5,
      id: 96,
      description: "nobis suscipit ducimus enim asperiores voluptas",
      completed: false,
    },
    {
      userId: 5,
      id: 97,
      description: "dolorum laboriosam eos qui iure aliquam",
      completed: false,
    },
    {
      userId: 5,
      id: 98,
      description:
        "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
      completed: true,
    },
    {
      userId: 5,
      id: 99,
      description: "neque voluptates ratione",
      completed: false,
    },
    {
      userId: 5,
      id: 100,
      description: "excepturi a et neque qui expedita vel voluptate",
      completed: false,
    },
    {
      userId: 6,
      id: 101,
      description: "explicabo enim cumque porro aperiam occaecati minima",
      completed: false,
    },
    {
      userId: 6,
      id: 102,
      description: "sed ab consequatur",
      completed: false,
    },
    {
      userId: 6,
      id: 103,
      description: "non sunt delectus illo nulla tenetur enim omnis",
      completed: false,
    },
    {
      userId: 6,
      id: 104,
      description: "excepturi non laudantium quo",
      completed: false,
    },
    {
      userId: 6,
      id: 105,
      description: "totam quia dolorem et illum repellat voluptas optio",
      completed: true,
    },
    {
      userId: 6,
      id: 106,
      description: "ad illo quis voluptatem temporibus",
      completed: true,
    },
    {
      userId: 6,
      id: 107,
      description:
        "praesentium facilis omnis laudantium fugit ad iusto nihil nesciunt",
      completed: false,
    },
    {
      userId: 6,
      id: 108,
      description: "a eos eaque nihil et exercitationem incidunt delectus",
      completed: true,
    },
    {
      userId: 6,
      id: 109,
      description: "autem temporibus harum quisquam in culpa",
      completed: true,
    },
    {
      userId: 6,
      id: 110,
      description: "aut aut ea corporis",
      completed: true,
    },
    {
      userId: 6,
      id: 111,
      description: "magni accusantium labore et id quis provident",
      completed: false,
    },
    {
      userId: 6,
      id: 112,
      description:
        "consectetur impedit quisquam qui deserunt non rerum consequuntur eius",
      completed: false,
    },
    {
      userId: 6,
      id: 113,
      description:
        "quia atque aliquam sunt impedit voluptatum rerum assumenda nisi",
      completed: false,
    },
    {
      userId: 6,
      id: 114,
      description:
        "cupiditate quos possimus corporis quisquam exercitationem beatae",
      completed: false,
    },
    {
      userId: 6,
      id: 115,
      description: "sed et ea eum",
      completed: false,
    },
    {
      userId: 6,
      id: 116,
      description: "ipsa dolores vel facilis ut",
      completed: true,
    },
    {
      userId: 6,
      id: 117,
      description: "sequi quae est et qui qui eveniet asperiores",
      completed: false,
    },
    {
      userId: 6,
      id: 118,
      description: "quia modi consequatur vero fugiat",
      completed: false,
    },
    {
      userId: 6,
      id: 119,
      description: "corporis ducimus ea perspiciatis iste",
      completed: false,
    },
    {
      userId: 6,
      id: 120,
      description: "dolorem laboriosam vel voluptas et aliquam quasi",
      completed: false,
    },
    {
      userId: 7,
      id: 121,
      description: "inventore aut nihil minima laudantium hic qui omnis",
      completed: true,
    },
    {
      userId: 7,
      id: 122,
      description: "provident aut nobis culpa",
      completed: true,
    },
    {
      userId: 7,
      id: 123,
      description: "esse et quis iste est earum aut impedit",
      completed: false,
    },
    {
      userId: 7,
      id: 124,
      description: "qui consectetur id",
      completed: false,
    },
    {
      userId: 7,
      id: 125,
      description: "aut quasi autem iste tempore illum possimus",
      completed: false,
    },
    {
      userId: 7,
      id: 126,
      description: "ut asperiores perspiciatis veniam ipsum rerum saepe",
      completed: true,
    },
    {
      userId: 7,
      id: 127,
      description: "voluptatem libero consectetur rerum ut",
      completed: true,
    },
    {
      userId: 7,
      id: 128,
      description: "eius omnis est qui voluptatem autem",
      completed: false,
    },
    {
      userId: 7,
      id: 129,
      description: "rerum culpa quis harum",
      completed: false,
    },
    {
      userId: 7,
      id: 130,
      description: "nulla aliquid eveniet harum laborum libero alias ut unde",
      completed: true,
    },
    {
      userId: 7,
      id: 131,
      description: "qui ea incidunt quis",
      completed: false,
    },
    {
      userId: 7,
      id: 132,
      description: "qui molestiae voluptatibus velit iure harum quisquam",
      completed: true,
    },
    {
      userId: 7,
      id: 133,
      description: "et labore eos enim rerum consequatur sunt",
      completed: true,
    },
    {
      userId: 7,
      id: 134,
      description: "molestiae doloribus et laborum quod ea",
      completed: false,
    },
    {
      userId: 7,
      id: 135,
      description: "facere ipsa nam eum voluptates reiciendis vero qui",
      completed: false,
    },
    {
      userId: 7,
      id: 136,
      description: "asperiores illo tempora fuga sed ut quasi adipisci",
      completed: false,
    },
    {
      userId: 7,
      id: 137,
      description: "qui sit non",
      completed: false,
    },
    {
      userId: 7,
      id: 138,
      description: "placeat minima consequatur rem qui ut",
      completed: true,
    },
    {
      userId: 7,
      id: 139,
      description: "consequatur doloribus id possimus voluptas a voluptatem",
      completed: false,
    },
    {
      userId: 7,
      id: 140,
      description: "aut consectetur in blanditiis deserunt quia sed laboriosam",
      completed: true,
    },
    {
      userId: 8,
      id: 141,
      description:
        "explicabo consectetur debitis voluptates quas quae culpa rerum non",
      completed: true,
    },
    {
      userId: 8,
      id: 142,
      description:
        "maiores accusantium architecto necessitatibus reiciendis ea aut",
      completed: true,
    },
    {
      userId: 8,
      id: 143,
      description: "eum non recusandae cupiditate animi",
      completed: false,
    },
    {
      userId: 8,
      id: 144,
      description: "ut eum exercitationem sint",
      completed: false,
    },
    {
      userId: 8,
      id: 145,
      description: "beatae qui ullam incidunt voluptatem non nisi aliquam",
      completed: false,
    },
    {
      userId: 8,
      id: 146,
      description:
        "molestiae suscipit ratione nihil odio libero impedit vero totam",
      completed: true,
    },
    {
      userId: 8,
      id: 147,
      description: "eum itaque quod reprehenderit et facilis dolor autem ut",
      completed: true,
    },
    {
      userId: 8,
      id: 148,
      description: "esse quas et quo quasi exercitationem",
      completed: false,
    },
    {
      userId: 8,
      id: 149,
      description: "animi voluptas quod perferendis est",
      completed: false,
    },
    {
      userId: 8,
      id: 150,
      description: "eos amet tempore laudantium fugit a",
      completed: false,
    },
    {
      userId: 8,
      id: 151,
      description: "accusamus adipisci dicta qui quo ea explicabo sed vero",
      completed: true,
    },
    {
      userId: 8,
      id: 152,
      description: "odit eligendi recusandae doloremque cumque non",
      completed: false,
    },
    {
      userId: 8,
      id: 153,
      description: "ea aperiam consequatur qui repellat eos",
      completed: false,
    },
    {
      userId: 8,
      id: 154,
      description: "rerum non ex sapiente",
      completed: true,
    },
    {
      userId: 8,
      id: 155,
      description: "voluptatem nobis consequatur et assumenda magnam",
      completed: true,
    },
    {
      userId: 8,
      id: 156,
      description: "nam quia quia nulla repellat assumenda quibusdam sit nobis",
      completed: true,
    },
    {
      userId: 8,
      id: 157,
      description: "dolorem veniam quisquam deserunt repellendus",
      completed: true,
    },
    {
      userId: 8,
      id: 158,
      description: "debitis vitae delectus et harum accusamus aut deleniti a",
      completed: true,
    },
    {
      userId: 8,
      id: 159,
      description:
        "debitis adipisci quibusdam aliquam sed dolore ea praesentium nobis",
      completed: true,
    },
    {
      userId: 8,
      id: 160,
      description: "et praesentium aliquam est",
      completed: false,
    },
    {
      userId: 9,
      id: 161,
      description: "ex hic consequuntur earum omnis alias ut occaecati culpa",
      completed: true,
    },
    {
      userId: 9,
      id: 162,
      description: "omnis laboriosam molestias animi sunt dolore",
      completed: true,
    },
    {
      userId: 9,
      id: 163,
      description:
        "natus corrupti maxime laudantium et voluptatem laboriosam odit",
      completed: false,
    },
    {
      userId: 9,
      id: 164,
      description: "reprehenderit quos aut aut consequatur est sed",
      completed: false,
    },
    {
      userId: 9,
      id: 165,
      description: "fugiat perferendis sed aut quidem",
      completed: false,
    },
    {
      userId: 9,
      id: 166,
      description: "quos quo possimus suscipit minima ut",
      completed: false,
    },
    {
      userId: 9,
      id: 167,
      description: "et quis minus quo a asperiores molestiae",
      completed: false,
    },
    {
      userId: 9,
      id: 168,
      description: "recusandae quia qui sunt libero",
      completed: false,
    },
    {
      userId: 9,
      id: 169,
      description: "ea odio perferendis officiis",
      completed: true,
    },
    {
      userId: 9,
      id: 170,
      description: "quisquam aliquam quia doloribus aut",
      completed: false,
    },
    {
      userId: 9,
      id: 171,
      description: "fugiat aut voluptatibus corrupti deleniti velit iste odio",
      completed: true,
    },
    {
      userId: 9,
      id: 172,
      description: "et provident amet rerum consectetur et voluptatum",
      completed: false,
    },
    {
      userId: 9,
      id: 173,
      description: "harum ad aperiam quis",
      completed: false,
    },
    {
      userId: 9,
      id: 174,
      description: "similique aut quo",
      completed: false,
    },
    {
      userId: 9,
      id: 175,
      description:
        "laudantium eius officia perferendis provident perspiciatis asperiores",
      completed: true,
    },
    {
      userId: 9,
      id: 176,
      description: "magni soluta corrupti ut maiores rem quidem",
      completed: false,
    },
    {
      userId: 9,
      id: 177,
      description: "et placeat temporibus voluptas est tempora quos quibusdam",
      completed: false,
    },
    {
      userId: 9,
      id: 178,
      description: "nesciunt itaque commodi tempore",
      completed: true,
    },
    {
      userId: 9,
      id: 179,
      description: "omnis consequuntur cupiditate impedit itaque ipsam quo",
      completed: true,
    },
    {
      userId: 9,
      id: 180,
      description: "debitis nisi et dolorem repellat et",
      completed: true,
    },
    {
      userId: 10,
      id: 181,
      description: "ut cupiditate sequi aliquam fuga maiores",
      completed: false,
    },
    {
      userId: 10,
      id: 182,
      description: "inventore saepe cumque et aut illum enim",
      completed: true,
    },
    {
      userId: 10,
      id: 183,
      description: "omnis nulla eum aliquam distinctio",
      completed: true,
    },
    {
      userId: 10,
      id: 184,
      description: "molestias modi perferendis perspiciatis",
      completed: false,
    },
    {
      userId: 10,
      id: 185,
      description: "voluptates dignissimos sed doloribus animi quaerat aut",
      completed: false,
    },
    {
      userId: 10,
      id: 186,
      description: "explicabo odio est et",
      completed: false,
    },
    {
      userId: 10,
      id: 187,
      description: "consequuntur animi possimus",
      completed: false,
    },
    {
      userId: 10,
      id: 188,
      description: "vel non beatae est",
      completed: true,
    },
    {
      userId: 10,
      id: 189,
      description: "culpa eius et voluptatem et",
      completed: true,
    },
    {
      userId: 10,
      id: 190,
      description: "accusamus sint iusto et voluptatem exercitationem",
      completed: true,
    },
    {
      userId: 10,
      id: 191,
      description:
        "temporibus atque distinctio omnis eius impedit tempore molestias pariatur",
      completed: true,
    },
    {
      userId: 10,
      id: 192,
      description: "ut quas possimus exercitationem sint voluptates",
      completed: false,
    },
    {
      userId: 10,
      id: 193,
      description: "rerum debitis voluptatem qui eveniet tempora distinctio a",
      completed: true,
    },
    {
      userId: 10,
      id: 194,
      description: "sed ut vero sit molestiae",
      completed: false,
    },
    {
      userId: 10,
      id: 195,
      description: "rerum ex veniam mollitia voluptatibus pariatur",
      completed: true,
    },
    {
      userId: 10,
      id: 196,
      description: "consequuntur aut ut fugit similique",
      completed: true,
    },
    {
      userId: 10,
      id: 197,
      description: "dignissimos quo nobis earum saepe",
      completed: true,
    },
    {
      userId: 10,
      id: 198,
      description: "quis eius est sint explicabo",
      completed: true,
    },
    {
      userId: 10,
      id: 199,
      description: "numquam repellendus a magnam",
      completed: true,
    },
    {
      userId: 10,
      id: 200,
      description: "ipsam aperiam voluptates qui",
      completed: false,
    },
    {
      id: 201,
      completed: true,
      description: "Completed task",
      created: "created 17 seconds ago",
    },
    {
      id: 202,
      description: "Editing task",
      created: "created 5 minutes ago",
    },
    {
      id: 203,
      description: "Active task",
      created: "created 5 minutes ago",
    },
  ];
  const Active = All.filter((task) => !task.completed);
  const Completed = All.filter((task) => task.completed);
  const [tasks, setTasks] = useState(All);
  const Count = tasks.filter((task)=>!task.completed).length;
  function buttonActive() {
    setTasks(Active);
  }
  function buttonCompleted() {
    setTasks(Completed);
  }
  function buttonAll() {
    setTasks(All);
  }
  function buttonClearCompleted() {
    setTasks(Active);
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    );
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function editedText(id, value) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, description: value, editing: false };
        } else {
          return task;
        }
      }),
    );
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskLIst
          tasks={tasks}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
          editedText={editedText}
        />
      </section>
      <Footer
        tasks={tasks}
        Count={Count}
        buttonClearCompleted={buttonClearCompleted}
        buttonAll={buttonAll}
        buttonCompleted={buttonCompleted}
        buttonActive={buttonActive}
      />
    </section>
  );
}

export default App;
