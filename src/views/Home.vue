<template>
  <div class="min-h-screen bg-gray-100">
    <div class="py-10">
      <div class="wrapper lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="hidden lg:block lg:col-span-3 xl:col-span-2">
          <nav aria-label="Sidebar" class="sticky top-4">
            <div class="pt-4 pb-8 space-y-1">
              <p
                class="text-left font-semibold text-gray-500 uppercase tracking-wider mb-4"
              >
                Filter events
              </p>

              <!-- Checkboxes -->
              <div>
                <div class="relative flex items-start mb-4">
                  <div class="flex items-center h-5">
                    <input
                      v-model="eventType"
                      value="Trail Ride"
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-transparent h-4 w-4 text-rose-500 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="comments" class="font-medium text-gray-700"
                      >Trail Ride</label
                    >
                  </div>
                </div>

                <div class="relative flex items-start mb-4">
                  <div class="flex items-center h-5">
                    <input
                      v-model="eventType"
                      value="Trials"
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-transparent h-4 w-4 text-rose-500 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="comments" class="font-medium text-gray-700"
                      >Trials</label
                    >
                  </div>
                </div>

                <div class="relative flex items-start mb-4">
                  <div class="flex items-center h-5">
                    <input
                      v-model="eventType"
                      value="Enduro"
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-transparent h-4 w-4 text-rose-500 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="comments" class="font-medium text-gray-700"
                      >Enduro</label
                    >
                  </div>
                </div>
                <div class="relative flex items-start mb-4">
                  <div class="flex items-center h-5">
                    <input
                      v-model="eventType"
                      value="Motorcross"
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-transparent h-4 w-4 text-rose-500 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="comments" class="font-medium text-gray-700"
                      >Motorcross</label
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Slider - Price -->
            <div>
              <label
                for="organiser"
                class="flex justify-start text-sm font-medium text-gray-700 mt-6 mb-10"
                >Price</label
              >
              <Slider v-model="eventPrice.value" v-bind="eventPrice"></Slider>
            </div>

            <!-- Select - Organiser -->
            <div>
              <label
                for="organiser"
                class="flex justify-start text-sm font-medium text-gray-700 mt-6"
                >Organiser</label
              >
              <select
                v-model="eventOrganiser"
                name="organiser"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm rounded-md"
              >
                <option value="">All</option>
                <option
                  v-for="(organiser, index) in organisers"
                  :key="index"
                  :value="organiser"
                >
                  {{ organiser }}
                </option>
              </select>
            </div>
            <!-- Select - Region -->
            <div>
              <label
                for="region"
                class="flex justify-start text-sm font-medium text-gray-700 mt-6"
                >Region</label
              >
              <select
                v-model="eventRegion"
                name="region"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm rounded-md"
              >
                <option value="">All</option>
                <option
                  v-for="(region, index) in regions"
                  :key="index"
                  :value="region"
                >
                  {{ region }}
                </option>
              </select>
            </div>
          </nav>
        </div>
        <main class="lg:col-span-9 xl:col-span-10">
          <!-- Search element -->
          <div class="min-w-0 flex-1">
            <div class="flex items-center py-4 md:mx-auto lg:mx-0">
              <div class="w-full">
                <label for="search" class="sr-only">Search event</label>
                <div class="relative">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
                  >
                    <SearchIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    v-model="eventSearch"
                    id="search"
                    name="search"
                    class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                    placeholder="Search events"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Test data -->
          <!-- <div>
            <p>
              <strong>Keyword:</strong><input type="text" v-model="keyword" />
            </p>
            <p>
              <strong>Color:</strong> Red:
              <input type="checkbox" v-model="colors" value="red" /> Black:
              <input type="checkbox" v-model="colors" value="black" />
            </p>
            <p>
              <strong>Size:</strong> L:
              <input type="checkbox" v-model="sizes" value="L" /> XL:
              <input type="checkbox" v-model="sizes" value="XL" />
            </p>
            <p>
              <strong>Sort By:</strong>
              <select v-model="sortBy">
                <option value="name">Product Name</option>
                <option value="color">Color</option>
                <option value="size">Size</option>
              </select>
            </p>
            <table border="1">
              <caption>
                Total
                {{
                  computedProducts.length
                }}
                Products
              </caption>
              <tbody>
                <tr v-for="(product, index) in computedProducts" :key="index">
                  <td>{{ product.name }}</td>
                  <td>{{ product.size }}</td>
                  <td>{{ product.color }}</td>
                </tr>
              </tbody>
            </table>
          </div> -->

          <!-- Events loop -->
          <div class="mt-6 mx-auto grid gap-8 lg:grid-cols-3">
            <div
              v-for="(event, index) in filteredEvents"
              :key="index"
              class="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  :src="event.imageUrl"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-cyan-600">
                    {{ event.startDate }}
                  </p>
                  <a :href="event.href" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      {{ event.title }}
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      {{ event.preview }}
                    </p>
                  </a>
                </div>
                <div class="flex w-full justify-between items-center mt-6">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <a :href="event.organiser.href">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="event.organiser.imageUrl"
                          :alt="event.organiser.name"
                        />
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a :href="event.organiser.href" class="hover:underline">
                          {{ event.organiser.name }}
                        </a>
                      </p>
                    </div>
                  </div>
                  <span
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    {{ event.type }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@vueform/slider";
import { SearchIcon } from "@heroicons/vue/solid";

export default {
  components: {
    SearchIcon,
    Slider,
  },

  data() {
    return {
      products: [
        { name: "test1", color: "red", size: "XL" },
        { name: "test2", color: "black", size: "L" },
        { name: "test3", color: "red", size: "L" },
        { name: "test4", color: "black", size: "XL" },
        { name: "test5", color: "red", size: "L" },
        { name: "test6", color: "yellow", size: "XL" },
        { name: "test7", color: "black", size: "L" },
      ],
      eventPrice: {
        value: [0, 50],
      },
      sortBy: "name",
      eventSearch: "",
      eventSort: [],
      eventType: [],
      eventOrganiser: "",
      regions: [
        "Greater Auckland",
        "South Waikato",
        "Whakatane",
        "Taranaki",
        "Ruapehu",
      ],
      eventRegion: "",
      organisers: ["Roel Aufderehar", "Brenna Goyette", "Daniela Metz"],
      events: [
        {
          id: 1,
          title: "Redwoods Trail Ride",
          href: "#",
          startDate: "May 2, 2021",
          datetime: "2021-05-02",
          category: "Offroad/trail",
          price: 0,
          type: "Trail Ride",
          class: "Two wheelers",
          region: "South Waikato",
          imageUrl: "https://source.unsplash.com/collection/4724153/600x400",
          preview:
            "Exciting pine forest trail ride which will provide fun and challenges for all riders. For the first time there will be two track approximately 15km long both with several home tracks.",
          organiser: {
            name: "Roel Aufderehar",
            imageUrl:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            href: "#",
          },
        },
        {
          id: 2,
          title: "Endless Trail Ride",
          href: "#",
          startDate: "May 2, 2021",
          datetime: "2021-05-02",
          category: "Offroad/trail",
          price: 50,
          type: "Trail Ride",
          class: "Two wheelers",
          region: "Greater Auckland",
          imageUrl: "https://source.unsplash.com/collection/2442087/600x400",
          preview:
            "Great tracks. Novice, pee wee, and three other tracks. Something for everyone..",
          organiser: {
            name: "Brenna Goyette",
            imageUrl:
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            href: "#",
          },
        },
        {
          id: 3,
          title: "Burt Farm Trail Ride",
          href: "#",
          startDate: "May 8, 2021",
          datetime: "2021-05-08",
          category: "Offroad/trail",
          price: 25,
          type: "Trail Ride",
          class: "Two wheelers",
          region: "Whakatane",
          imageUrl: "https://source.unsplash.com/collection/1571666/600x400",
          preview:
            "The main track is approx 18-20km long. It has a short cut home for people who don't want to do the whole track (this is about 4kms long).",
          organiser: {
            name: "Daniela Metz",
            imageUrl:
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            href: "#",
          },
        },
        {
          id: 4,
          title: "NI Champs R3",
          href: "#",
          startDate: "May 8, 2021",
          datetime: "2021-05-08",
          category: "Offroad/trail",
          price: 15,
          type: "Trials",
          class: "Two wheelers",
          region: "Taranaki",
          imageUrl: "https://source.unsplash.com/collection/2190972/600x400",
          preview:
            "Exciting pine forest trail ride which will provide fun and challenges for all riders. For the first time there will be two track approximately 15km long both with several home tracks.",
          organiser: {
            name: "Roel Aufderehar",
            imageUrl:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            href: "#",
          },
        },
        {
          id: 5,
          title: "Atiamuri Classic Vinduro",
          href: "#",
          startDate: "May 9, 2021",
          datetime: "2021-05-09",
          category: "Offroad/trail",
          price: 0,
          type: "Enduro",
          class: "Two wheelers",
          region: "South Waikato",
          imageUrl: "https://source.unsplash.com/collection/2063245/600x400",
          preview:
            "Who doesn't love a classic enduro? Not me and this ride will not disappoint.",
          organiser: {
            name: "Daniela Metz",
            imageUrl:
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            href: "#",
          },
        },
        {
          id: 6,
          title: "Taumaranui MX Funday",
          href: "#",
          startDate: "May 9, 2021",
          datetime: "2021-09-02",
          category: "Offroad/trail",
          price: 95,
          type: "Motorcross",
          class: "Two wheelers",
          region: "Ruapehu",
          imageUrl: "https://source.unsplash.com/collection/1409758/600x400",
          preview:
            "A classic day of family fun a the smell of 2-stroke engines. See you there.",
          organiser: {
            name: "Brenna Goyette",
            imageUrl:
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            href: "#",
          },
        },
      ],
    };
  },
  computed: {
    computedProducts() {
      return this.products
        .filter((item) => {
          return (
            (this.keyword.length === 0 || item.name.includes(this.keyword)) &&
            (this.colors.length === 0 || this.colors.includes(item.color)) &&
            (this.sizes.length === 0 || this.sizes.includes(item.size))
          );
        })
        .sort((a, b) => {
          return a[this.sortBy]
            .toString()
            .localeCompare(b[this.sortBy].toString());
        });
    },
    filteredEvents() {
      return this.events
        .filter((item) => {
          return (
            (this.eventSearch.length === 0 ||
              item.title
                .toLowerCase()
                .includes(this.eventSearch.toLowerCase())) &&
            (this.eventType.length === 0 ||
              this.eventType.includes(item.type)) &&
            (this.eventOrganiser.length === 0 ||
              this.eventOrganiser.includes(item.organiser.name)) &&
            (this.eventRegion.length === 0 ||
              this.eventRegion.includes(item.region)) &&
              (item.price >= this.eventPrice.value[0] && item.price <= this.eventPrice.value[1])
          );
        })
      // .sort((a, b) => {
      //   return a[this.sortBy]
      //     .toString()
      //     .localeCompare(b[this.sortBy].toString());
      // });
    },
  },
  mounted() {
    console.log("array event 2 value", this.events[2].price);

    if (
      this.events[2].price >= this.eventPrice.value[0] &&
      this.events[2].price <= this.eventPrice.value[1]
    ) {
      console.log("in the range");
    } else {
      console.log("outside the range");
    }
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style>
.slider-tooltip {
  background: rgba(225, 29, 72, var(--tw-bg-opacity));
  border: rgba(225, 29, 72, var(--tw-bg-opacity));
}
.slider-connect {
  background: rgba(225, 29, 72, var(--tw-bg-opacity));
}
</style>