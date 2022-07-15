type StackParamList = {
  MealOverview: { categoryId: string[] };
  MealCategories: undefined;
  MealDetails: { cetagoryId: string[] } | undefined;
};

export { StackParamList };
