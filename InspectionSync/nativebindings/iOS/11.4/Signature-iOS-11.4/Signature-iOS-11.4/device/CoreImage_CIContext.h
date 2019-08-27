#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIContext_symbols(JSContext*);
@protocol CIContextImageRepresentationCategoryInstanceExports<JSExport>
JSExportAs(writeHEIFRepresentationOfImageToURLFormatColorSpaceOptionsError,
-(BOOL) jswriteHEIFRepresentationOfImage: (CIImage *) image toURL: (NSURL *) url format: (CIFormat) format colorSpace: (id) colorSpace options: (NSDictionary *) options error: (JSValue *) errorPtr );
-(NSData *) PNGRepresentationOfImage: (CIImage *) image format: (CIFormat) format colorSpace: (id) colorSpace options: (NSDictionary *) options ;
JSExportAs(writeTIFFRepresentationOfImageToURLFormatColorSpaceOptionsError,
-(BOOL) jswriteTIFFRepresentationOfImage: (CIImage *) image toURL: (NSURL *) url format: (CIFormat) format colorSpace: (id) colorSpace options: (NSDictionary *) options error: (JSValue *) errorPtr );
JSExportAs(writePNGRepresentationOfImageToURLFormatColorSpaceOptionsError,
-(BOOL) jswritePNGRepresentationOfImage: (CIImage *) image toURL: (NSURL *) url format: (CIFormat) format colorSpace: (id) colorSpace options: (NSDictionary *) options error: (JSValue *) errorPtr );
-(NSData *) JPEGRepresentationOfImage: (CIImage *) image colorSpace: (id) colorSpace options: (NSDictionary *) options ;
-(NSData *) TIFFRepresentationOfImage: (CIImage *) image format: (CIFormat) format colorSpace: (id) colorSpace options: (NSDictionary *) options ;
-(NSData *) HEIFRepresentationOfImage: (CIImage *) image format: (CIFormat) format colorSpace: (id) colorSpace options: (NSDictionary *) options ;
JSExportAs(writeJPEGRepresentationOfImageToURLColorSpaceOptionsError,
-(BOOL) jswriteJPEGRepresentationOfImage: (CIImage *) image toURL: (NSURL *) url colorSpace: (id) colorSpace options: (NSDictionary *) options error: (JSValue *) errorPtr );
@end
@protocol CIContextImageRepresentationCategoryClassExports<JSExport>
@end
@protocol CIContextInstanceExports<JSExport>
@property (readonly,nonatomic) CIFormat workingFormat;
@property (readonly,nonatomic) id workingColorSpace;
-(void) render: (CIImage *) image toIOSurface: (id) surface bounds: (CGRect) bounds colorSpace: (id) colorSpace ;
-(void) render: (CIImage *) image toMTLTexture: (id) texture commandBuffer: (id) commandBuffer bounds: (CGRect) bounds colorSpace: (id) colorSpace ;
-(CGSize) inputImageMaximumSize;
-(id) createCGImage: (CIImage *) image fromRect: (CGRect) fromRect ;
JSExportAs(initWithOptions,
-(id) jsinitWithOptions: (NSDictionary *) options );
-(void) render: (CIImage *) image toCVPixelBuffer: (id) buffer bounds: (CGRect) bounds colorSpace: (id) colorSpace ;
-(void) drawImage: (CIImage *) image atPoint: (CGPoint) atPoint fromRect: (CGRect) fromRect ;
-(void) drawImage: (CIImage *) image inRect: (CGRect) inRect fromRect: (CGRect) fromRect ;
-(id) createCGImage: (CIImage *) image fromRect: (CGRect) fromRect format: (CIFormat) format colorSpace: (id) colorSpace deferred: (BOOL) deferred ;
-(id) jsinit;
-(void) clearCaches;
-(CGSize) outputImageMaximumSize;
-(id) createCGImage: (CIImage *) image fromRect: (CGRect) fromRect format: (CIFormat) format colorSpace: (id) colorSpace ;
-(void) render: (CIImage *) image toCVPixelBuffer: (id) buffer ;
@end
@protocol CIContextClassExports<JSExport>
+(CIContext *) contextWithCGContext: (id) cgctx options: (NSDictionary *) options ;
+(CIContext *) contextWithOptions: (NSDictionary *) options ;
+(CIContext *) contextWithEAGLContext: (EAGLContext *) eaglContext ;
+(CIContext *) contextWithMTLDevice: (id) device options: (NSDictionary *) options ;
+(CIContext *) contextWithEAGLContext: (EAGLContext *) eaglContext options: (NSDictionary *) options ;
+(CIContext *) contextWithMTLDevice: (id) device ;
+(CIContext *) context;
@end
@protocol CIContextOfflineGPUSupportCategoryInstanceExports<JSExport>
@end
@protocol CIContextOfflineGPUSupportCategoryClassExports<JSExport>
@end
#pragma clang diagnostic pop