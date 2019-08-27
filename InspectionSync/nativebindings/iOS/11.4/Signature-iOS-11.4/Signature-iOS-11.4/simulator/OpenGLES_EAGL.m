#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation EAGLContext (Exports)
-(id) jsinitWithAPI: (EAGLRenderingAPI) api 
{
	id resultVal__;
	resultVal__ = [[self initWithAPI: api ] autorelease];
	return resultVal__;
}
-(id) jsinitWithAPI: (EAGLRenderingAPI) api sharegroup: (EAGLSharegroup *) sharegroup 
{
	id resultVal__;
	resultVal__ = [[self initWithAPI: api sharegroup: sharegroup ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([EAGLContext class], @protocol(EAGLContextInstanceExports));
	class_addProtocol([EAGLContext class], @protocol(EAGLContextClassExports));
	class_addProtocol([EAGLSharegroup class], @protocol(EAGLSharegroupInstanceExports));
	class_addProtocol([EAGLSharegroup class], @protocol(EAGLSharegroupClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kEAGLRenderingAPIOpenGLES1"] = @1UL;
	context[@"kEAGLRenderingAPIOpenGLES2"] = @2UL;
	context[@"kEAGLRenderingAPIOpenGLES3"] = @3UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_OpenGLES_EAGL_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
