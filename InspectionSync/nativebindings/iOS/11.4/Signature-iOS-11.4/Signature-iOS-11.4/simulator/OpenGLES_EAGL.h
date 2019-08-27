#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_OpenGLES_EAGL_symbols(JSContext*);
@protocol EAGLContextInstanceExports<JSExport>
@property (readonly) EAGLRenderingAPI API;
@property (readonly) EAGLSharegroup * sharegroup;
@property (getter=isMultiThreaded,nonatomic) BOOL multiThreaded;
@property (copy,nonatomic) NSString * debugLabel;
JSExportAs(initWithAPI,
-(id) jsinitWithAPI: (EAGLRenderingAPI) api );
JSExportAs(initWithAPISharegroup,
-(id) jsinitWithAPI: (EAGLRenderingAPI) api sharegroup: (EAGLSharegroup *) sharegroup );
@end
@protocol EAGLContextClassExports<JSExport>
+(EAGLContext *) currentContext;
+(BOOL) setCurrentContext: (EAGLContext *) context ;
@end
@protocol EAGLSharegroupInstanceExports<JSExport>
@property (copy,nonatomic) NSString * debugLabel;
@end
@protocol EAGLSharegroupClassExports<JSExport>
@end
#pragma clang diagnostic pop