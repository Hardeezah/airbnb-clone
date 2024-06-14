export const dynamic = 'force-dynamic'
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListings, { IListingParams } from "./actions/getListings";
import ListingCard from "./components/ListingCard";
import { getCurrentUser } from "./actions/getCurrentUser";
import { SafeUser } from "./types";
import ClientOnly from "./components/ClientOnly";

interface HomeProps{
  searchParams: IListingParams
}

const Home = async ({searchParams}: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser() as SafeUser | null;

  if(listings.length === 0) {
    return(
      <EmptyState showReset/>
    )
  }


  return (
    <ClientOnly>
        <Container>
          <div className="
            pt-24
            grid
            grid-col-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          ">
            {listings.map((listing) => {
              return (
                <ListingCard
                  key={listing.id}
                  data={listing}
                  currentUser={currentUser}
                />
              )
            })}
          </div>
        </Container>
      </ClientOnly>
    );
}

export default Home;