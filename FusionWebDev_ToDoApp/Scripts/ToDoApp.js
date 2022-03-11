$(document).ready(function () {
	/*
	getList("/api/ToDo");

	async function getList(url) {
		const response = await fetch(url);
		var data = await response.json();
		console.log(data);

		if (data) {
			for (let i = 0; i < data.length; i++) {
				const listItem = createListItem(data[i], i+1);
				$("#checklist").append(listItem);
            }
        }		
	}
	*/

	const items = ["planning", "preparation", "task A"];
	const checklist = $("#checklist");
	const doneList = $("#done-list");
	const newItem = $("#new-item");

	items.forEach(item => {
		const listItem = createListItem(item);
		checklist.append(listItem);
	});

	function createListItem(item) {
		const listContainer = $("<li>").addClass("checklist-item list-group-item d-flex align-items-center border-0 mb-2 rounded pl-3 mb-2");

		const listId = Math.floor(Math.random() * 1000);
		const checkbox = $("<input>").attr("type", "checkbox").attr("id", `checkbox-${listId}`)
			.addClass("form-check-input ml-0").on("change", checkboxChange);
		const label = $("<label>").attr("for", `checkbox-${listId}`).addClass("mb-1").text(item);
		const removeIcon = $("<i>").addClass("fa fa-minus-circle")
			.on("click", removeListItem);

		listContainer.append(checkbox, label, removeIcon);

		return listContainer;
	}

	function checkboxChange(e) {		
		const isChecked = $(e.target)[0].checked;
		const labelEle = $(e.target).next();
		const changedItem = $(e.target).closest("li.checklist-item");
		
		if (isChecked) {
			labelEle.addClass("strikethrough");
			$(e.target).attr("checked", "checked");

			$("hr").removeClass("d-none").addClass("d-block");
			
			doneList.append(changedItem);

			checkListEmpty();
		} else {
			labelEle.removeClass("strikethrough");
			$(e.target).removeAttr("checked", "checked");
			checkListNotEmpty();

			checklist.append(changedItem);

			doneListEmpty();
        }
		
	}

	function removeListItem(e) {
		$(e.target).closest("li.checklist-item").remove();
		const removeItemLabel = $(e.target).prev().text();
		const index = items.indexOf(removeItemLabel);
		items.splice(index, 1);
		checkListEmpty();
		doneListEmpty();
    }

	$("form").on("submit", (e) => {
		e.preventDefault();
		const newItemText = $("input[type='text']").val();
		const listItem = createListItem(newItemText);

		checkListNotEmpty();
		newItem.val("");
		checklist.append(listItem);
		items.push(newItemText);
//		console.log(JSON.stringify(newItem));
//		postData("/api/ToDo", newItem);
	});

	function checkListEmpty() {
		if (checklist.text() === '') {
			checklist.text("No new task.");
		}
    }

	function checkListNotEmpty() {
		if (checklist.text() === 'No new task.') {
			checklist.text("");
		}
	}

	function doneListEmpty() {
		if (doneList.text() === "") {
			$("hr").removeClass("d-block").addClass("d-none");
		}
	}

	/*
	async function postData(url, data) {
		try {
/*			await fetch(url, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			*/
//			const responseData = await response.json();
//			console.log(responseData);
/*
			$.ajax({
				url: "/api/ToDo",
				type: 'POST',
				contentType:
					"application/json;charset=utf-8",
				data: JSON.stringify(data),
/*				success: function (product) {
					productAddSuccess(product);
				},
				error: function (request, message, error) {
					handleException(request, message, error);
				}
			});
//			getList("/api/ToDo");
		} catch (e) {
			return e;
        } 
	}
*/	
});