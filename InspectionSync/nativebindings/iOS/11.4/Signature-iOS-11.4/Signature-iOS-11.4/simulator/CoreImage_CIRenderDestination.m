#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CIRenderTask (Exports)
-(CIRenderInfo *) jswaitUntilCompletedAndReturnError: (JSValue *) error 
{
	NSError* error_ = nil;
	CIRenderInfo * resultVal__;
	resultVal__ = [self waitUntilCompletedAndReturnError: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
@end
@implementation CIRenderDestination (Exports)
-(id) jsinitWithPixelBuffer: (id) pixelBuffer 
{
	id resultVal__;
	resultVal__ = [[self initWithPixelBuffer: pixelBuffer ] autorelease];
	return resultVal__;
}
-(id) jsinitWithWidth: (NSUInteger) width height: (NSUInteger) height pixelFormat: (MTLPixelFormat) pixelFormat commandBuffer: (id) commandBuffer mtlTextureProvider: (JSValue *) block 
{
	id  (^ block_)(void) = nil;
	if (!block.isUndefined) {
		block_ = ^id() {
			JSContext* __jsContext = block.context;
			NSMutableArray* parameters = [NSMutableArray array];
			JSValue* result = callJSFunction(__jsContext, block, self, parameters);
			return [result toObject];
		};
	}
	id resultVal__;
	resultVal__ = [[self initWithWidth: width height: height pixelFormat: pixelFormat commandBuffer: commandBuffer mtlTextureProvider: block_ ] autorelease];
	return resultVal__;
}
-(id) jsinitWithMTLTexture: (id) texture commandBuffer: (id) commandBuffer 
{
	id resultVal__;
	resultVal__ = [[self initWithMTLTexture: texture commandBuffer: commandBuffer ] autorelease];
	return resultVal__;
}
-(id) jsinitWithGLTexture: (unsigned int) texture target: (unsigned int) target width: (NSUInteger) width height: (NSUInteger) height 
{
	id resultVal__;
	resultVal__ = [[self initWithGLTexture: texture target: target width: width height: height ] autorelease];
	return resultVal__;
}
@end
@implementation CIContext (CIContextCIRenderDestinationCategoryExports)
-(CIRenderTask *) jsstartTaskToRender: (CIImage *) image toDestination: (CIRenderDestination *) destination error: (JSValue *) error 
{
	NSError* error_ = nil;
	CIRenderTask * resultVal__;
	resultVal__ = [self startTaskToRender: image toDestination: destination error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
-(CIRenderTask *) jsstartTaskToRender: (CIImage *) image fromRect: (CGRect) fromRect toDestination: (CIRenderDestination *) destination atPoint: (CGPoint) atPoint error: (JSValue *) error 
{
	NSError* error_ = nil;
	CIRenderTask * resultVal__;
	resultVal__ = [self startTaskToRender: image fromRect: fromRect toDestination: destination atPoint: atPoint error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
-(CIRenderTask *) jsstartTaskToClear: (CIRenderDestination *) destination error: (JSValue *) error 
{
	NSError* error_ = nil;
	CIRenderTask * resultVal__;
	resultVal__ = [self startTaskToClear: destination error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
-(BOOL) jsprepareRender: (CIImage *) image fromRect: (CGRect) fromRect toDestination: (CIRenderDestination *) destination atPoint: (CGPoint) atPoint error: (JSValue *) error 
{
	NSError* error_ = nil;
	BOOL resultVal__;
	resultVal__ = [self prepareRender: image fromRect: fromRect toDestination: destination atPoint: atPoint error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CIRenderTask class], @protocol(CIRenderTaskInstanceExports));
	class_addProtocol([CIRenderTask class], @protocol(CIRenderTaskClassExports));
	class_addProtocol([CIRenderDestination class], @protocol(CIRenderDestinationInstanceExports));
	class_addProtocol([CIRenderDestination class], @protocol(CIRenderDestinationClassExports));
	class_addProtocol([CIContext class], @protocol(CIContextCIRenderDestinationCategoryInstanceExports));
	class_addProtocol([CIContext class], @protocol(CIContextCIRenderDestinationCategoryClassExports));
	class_addProtocol([CIRenderInfo class], @protocol(CIRenderInfoInstanceExports));
	class_addProtocol([CIRenderInfo class], @protocol(CIRenderInfoClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"CIRenderDestinationAlphaNone"] = @0UL;
	context[@"CIRenderDestinationAlphaPremultiplied"] = @1UL;
	context[@"CIRenderDestinationAlphaUnpremultiplied"] = @2UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreImage_CIRenderDestination_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
