package repository;

import java.util.Optional;

import javax.management.relation.Role;

import org.springframework.data.mongodb.repository.MongoRepository;

import models.ERole;

public interface RoleRepository  extends MongoRepository<Role, String> {
	  Optional<Role> findByName(ERole name);

}
