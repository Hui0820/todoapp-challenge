using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FusionWebDev_ToDoApp
{
	public class ToDoController : ApiController
	{
        private List<string> todos;

        public ToDoController()
        {
            this.todos = new List<string>();
			this.todos.Add("todo 1");
			this.todos.Add("todo 2");
		}

        // GET api/<controller>
        public IEnumerable<string> Get()
		{
			return todos;
		}

		// GET api/<controller>/5
		public string Get(int id)
		{
			return todos[id];
		}

		// POST api/<controller>
		public void Post([FromBody] string value)
		{
			Console.WriteLine(value);
			todos.Add(value);
		}

		// PUT api/<controller>/5
		public void Put(int id, [FromBody] string value)
		{
			todos[id] = value;
		}

		// DELETE api/<controller>/5
		public void Delete(int id)
		{
			todos.RemoveAt(id);
		}
	}
}