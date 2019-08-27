 package com.inspectionapp.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="inspection_user")
public class InspectionUser implements Serializable{

	private static final long serialVersionUID = -2833699606449030758L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="User_Id", unique=true, nullable=false)
	private String User_Id;
	
	@Column(name="FirstName", unique=false, nullable=false)
	private String FirstName;
	
	@Column(name="LastName", unique=false, nullable=false)
	private String LastName;
	
	@Column(name="email", unique=true, nullable=false)
	private String email;
	
	@Column(name="Password", unique=false, nullable=false)
	private String Password;
	
	@Column(name="Role", unique=false, nullable=false)
	private String Role;
	
	public InspectionUser()
	{
		
	}

	public String getUser_Id() {
		return User_Id;
	}

	public void setUser_Id(String user_Id) {
		User_Id = user_Id;
	}

	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String firstName) {
		FirstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getRole() {
		return Role;
	}

	public void setRole(String role) {
		Role = role;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}
