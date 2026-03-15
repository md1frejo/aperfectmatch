local M = {}

local function fuzzy_match(line, query)
  local pattern = query:gsub(".", "%0.*")
  return line:lower():match(pattern:lower())
end

function M.search()

  local query = vim.fn.input("Fuzzy search: ")
  if query == "" then return end

  local lines = vim.api.nvim_buf_get_lines(0, 0, -1, false)

  local matches = {}

  for i, line in ipairs(lines) do
    if fuzzy_match(line, query) then
      table.insert(matches, i .. ": " .. line)
    end
  end

  if #matches == 0 then
    print("No matches")
    return
  end

  vim.fn.setqflist({}, " ", { title = "FuzzySearch", lines = matches })
  vim.cmd("copen")

end

function M.setup()

  vim.api.nvim_create_user_command("FuzzyBuffer", function()
    M.search()
  end, {})

  vim.keymap.set("n", "<leader>fb", M.search, { desc = "Fuzzy buffer search" })

end

return M
