#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CIVector (Exports)
-(id) jsinitWithX: (CGFloat) x 
{
	id resultVal__;
	resultVal__ = [[self initWithX: x ] autorelease];
	return resultVal__;
}
-(id) jsinitWithX: (CGFloat) x Y: (CGFloat) y Z: (CGFloat) z 
{
	id resultVal__;
	resultVal__ = [[self initWithX: x Y: y Z: z ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCGAffineTransform: (CGAffineTransform) r 
{
	id resultVal__;
	resultVal__ = [[self initWithCGAffineTransform: r ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCGRect: (CGRect) r 
{
	id resultVal__;
	resultVal__ = [[self initWithCGRect: r ] autorelease];
	return resultVal__;
}
-(id) jsinitWithX: (CGFloat) x Y: (CGFloat) y Z: (CGFloat) z W: (CGFloat) w 
{
	id resultVal__;
	resultVal__ = [[self initWithX: x Y: y Z: z W: w ] autorelease];
	return resultVal__;
}
-(id) jsinitWithX: (CGFloat) x Y: (CGFloat) y 
{
	id resultVal__;
	resultVal__ = [[self initWithX: x Y: y ] autorelease];
	return resultVal__;
}
-(id) jsinitWithString: (NSString *) representation 
{
	id resultVal__;
	resultVal__ = [[self initWithString: representation ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCGPoint: (CGPoint) p 
{
	id resultVal__;
	resultVal__ = [[self initWithCGPoint: p ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CIVector class], @protocol(CIVectorInstanceExports));
	class_addProtocol([CIVector class], @protocol(CIVectorClassExports));
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
void load_CoreImage_CIVector_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
