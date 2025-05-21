import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FavoriteStackScreens } from "./FavoritesStackNavigator";
import { RootTabScreens } from "./RootTabsNavigator";

export type RootNavigationScreenProps<T extends keyof RootTabScreens> =
  NativeStackScreenProps<RootTabScreens, T>;

export type TopStacksScreenProps<T extends keyof FavoriteStackScreens> =
  CompositeScreenProps<
    NativeStackScreenProps<FavoriteStackScreens, T>,
    NativeStackScreenProps<RootTabScreens>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabScreens {}
  }
}
