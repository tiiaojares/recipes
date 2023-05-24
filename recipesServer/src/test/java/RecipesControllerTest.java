import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.recipes.controllers.RecipesController;
import com.recipes.entities.Recipe;
import com.recipes.repositories.RecipeRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)
public class RecipesControllerTest {

    private MockMvc mockMvc;

    ObjectMapper objectMapper = new ObjectMapper();
    ObjectWriter  objectWriter = objectMapper.writer();

    @Mock
    private RecipeRepository recipeRepository;

    @InjectMocks
    private RecipesController recipesController;

    Recipe recipe1 = new Recipe(1, "kuvaus1", "otsikko1");
    Recipe recipe2= new Recipe(2, "kuvaus2", "otsikko2");
    Recipe recipe3 = new Recipe(3, "kuvaus3", "otsikko3");

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(recipesController).build();
    }

    @Test
    public void getAllRecipes_success() throws Exception {
        List<Recipe> recipes = new ArrayList<>(Arrays.asList(recipe1, recipe2, recipe3));
        Mockito.when(recipeRepository.findAll()).thenReturn(recipes);
        mockMvc.perform(MockMvcRequestBuilders
                .get("/recipes")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$[2].title", is("kuvaus3")));
    }

    @Test
    public void getRecipeById_success() throws Exception {
        Mockito.when(recipeRepository.findById(recipe1.getId())).thenReturn(java.util.Optional.of(recipe1));

        mockMvc.perform(MockMvcRequestBuilders
                .get("/recipes/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", notNullValue()))
                .andExpect(jsonPath("$.title", is("kuvaus1")));

    }

    @Test
    public void createRecipe_success() throws Exception {
        Recipe newRecipe = Recipe.builder()
                .Id(4)
                .title("otsikko4")
                .description("kuvaus4")
                .build();

        Mockito.when(recipeRepository.save(newRecipe)).thenReturn(newRecipe);

        String content = objectWriter.writeValueAsString(newRecipe);

        MockHttpServletRequestBuilder mockRequst = MockMvcRequestBuilders.post("/recipes")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(content);

        mockMvc.perform(mockRequst)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", notNullValue()))
                .andExpect(jsonPath("$.title", is("otsikko4")));
    }
}
