#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIManagedDocument (Exports)
-(BOOL) jsreadAdditionalContentFromURL: (NSURL *) absoluteURL error: (JSValue *) error 
{
	NSError* error_ = nil;
	BOOL resultVal__;
	resultVal__ = [self readAdditionalContentFromURL: absoluteURL error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
-(BOOL) jsconfigurePersistentStoreCoordinatorForURL: (NSURL *) storeURL ofType: (NSString *) fileType modelConfiguration: (NSString *) configuration storeOptions: (NSDictionary *) storeOptions error: (JSValue *) error 
{
	NSError* error_ = nil;
	BOOL resultVal__;
	resultVal__ = [self configurePersistentStoreCoordinatorForURL: storeURL ofType: fileType modelConfiguration: configuration storeOptions: storeOptions error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
-(id) jsadditionalContentForURL: (NSURL *) absoluteURL error: (JSValue *) error 
{
	NSError* error_ = nil;
	id resultVal__;
	resultVal__ = [self additionalContentForURL: absoluteURL error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
-(BOOL) jswriteAdditionalContent: (id) content toURL: (NSURL *) absoluteURL originalContentsURL: (NSURL *) absoluteOriginalContentsURL error: (JSValue *) error 
{
	NSError* error_ = nil;
	BOOL resultVal__;
	resultVal__ = [self writeAdditionalContent: content toURL: absoluteURL originalContentsURL: absoluteOriginalContentsURL error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIManagedDocument class], @protocol(UIManagedDocumentInstanceExports));
	class_addProtocol([UIManagedDocument class], @protocol(UIManagedDocumentClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIManagedDocument_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
