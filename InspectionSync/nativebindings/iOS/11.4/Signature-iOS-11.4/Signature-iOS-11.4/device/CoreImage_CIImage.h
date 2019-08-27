#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIImage_symbols(JSContext*);
@protocol CIImageInstanceExports<JSExport, NSSecureCodingInstanceExports_, NSCopyingInstanceExports_>
@property (readonly,nonatomic) id CGImage;
@property (readonly,atomic) NSURL * url;
@property (readonly,atomic) id colorSpace;
@property (readonly,nonatomic) id pixelBuffer;
@property (readonly,nonatomic) CGRect extent;
@property (readonly,atomic) NSDictionary * properties;
@property (readonly,nonatomic) AVDepthData * depthData;
-(CIImage *) imageByUnpremultiplyingAlpha;
JSExportAs(initWithCVImageBufferOptions,
-(id) jsinitWithCVImageBuffer: (id) imageBuffer options: (NSDictionary *) options );
-(CIImage *) imageByApplyingCGOrientation: (CGImagePropertyOrientation) orientation ;
JSExportAs(initWithDataOptions,
-(id) jsinitWithData: (NSData *) data options: (NSDictionary *) options );
JSExportAs(initWithCVImageBuffer,
-(id) jsinitWithCVImageBuffer: (id) imageBuffer );
JSExportAs(initWithMTLTextureOptions,
-(id) jsinitWithMTLTexture: (id) texture options: (NSDictionary *) options );
-(CIImage *) imageByApplyingGaussianBlurWithSigma: (double) sigma ;
-(CIImage *) imageByApplyingOrientation: (int) orientation ;
JSExportAs(initWithContentsOfURLOptions,
-(id) jsinitWithContentsOfURL: (NSURL *) url options: (NSDictionary *) options );
-(CIImage *) imageByClampingToRect: (CGRect) rect ;
-(CIImage *) imageByPremultiplyingAlpha;
JSExportAs(initWithTextureSizeFlippedColorSpace,
-(id) jsinitWithTexture: (unsigned int) name size: (CGSize) size flipped: (BOOL) flipped colorSpace: (id) colorSpace );
JSExportAs(initWithCGImageOptions,
-(id) jsinitWithCGImage: (id) image options: (NSDictionary *) options );
-(CIImage *) imageBySamplingNearest;
-(CIImage *) imageBySettingProperties: (NSDictionary *) properties ;
-(CIImage *) imageBySamplingLinear;
JSExportAs(initWithCVPixelBuffer,
-(id) jsinitWithCVPixelBuffer: (id) pixelBuffer );
-(CGAffineTransform) imageTransformForOrientation: (int) orientation ;
-(CIImage *) imageByApplyingFilter: (NSString *) filterName withInputParameters: (NSDictionary *) params ;
-(CIImage *) imageByClampingToExtent;
JSExportAs(initWithColor,
-(id) jsinitWithColor: (CIColor *) color );
-(CIImage *) imageByApplyingTransform: (CGAffineTransform) matrix ;
JSExportAs(initWithData,
-(id) jsinitWithData: (NSData *) data );
-(CGAffineTransform) imageTransformForCGOrientation: (CGImagePropertyOrientation) orientation ;
-(CGRect) regionOfInterestForImage: (CIImage *) image inRect: (CGRect) rect ;
JSExportAs(initWithIOSurface,
-(id) jsinitWithIOSurface: (id) surface );
-(CIImage *) imageByColorMatchingColorSpaceToWorkingSpace: (id) colorSpace ;
JSExportAs(initWithCGImage,
-(id) jsinitWithCGImage: (id) image );
-(CIImage *) imageByCompositingOverImage: (CIImage *) dest ;
JSExportAs(initWithContentsOfURL,
-(id) jsinitWithContentsOfURL: (NSURL *) url );
JSExportAs(initWithBitmapDataBytesPerRowSizeFormatColorSpace,
-(id) jsinitWithBitmapData: (NSData *) data bytesPerRow: (size_t) bytesPerRow size: (CGSize) size format: (CIFormat) format colorSpace: (id) colorSpace );
-(CIImage *) imageByCroppingToRect: (CGRect) rect ;
JSExportAs(initWithIOSurfaceOptions,
-(id) jsinitWithIOSurface: (id) surface options: (NSDictionary *) options );
-(CIImage *) imageByApplyingFilter: (NSString *) filterName ;
JSExportAs(initWithCVPixelBufferOptions,
-(id) jsinitWithCVPixelBuffer: (id) pixelBuffer options: (NSDictionary *) options );
-(CIImage *) imageBySettingAlphaOneInExtent: (CGRect) extent ;
-(CIImage *) imageByColorMatchingWorkingSpaceToColorSpace: (id) colorSpace ;
@end
@protocol CIImageClassExports<JSExport, NSSecureCodingClassExports_, NSCopyingClassExports_>
+(CIImage *) imageWithIOSurface: (id) surface ;
+(CIImage *) imageWithContentsOfURL: (NSURL *) url options: (NSDictionary *) options ;
+(CIImage *) imageWithCVPixelBuffer: (id) pixelBuffer options: (NSDictionary *) options ;
+(CIImage *) imageWithTexture: (unsigned int) name size: (CGSize) size flipped: (BOOL) flipped colorSpace: (id) colorSpace ;
+(CIImage *) imageWithContentsOfURL: (NSURL *) url ;
+(CIImage *) emptyImage;
+(CIImage *) imageWithCVImageBuffer: (id) imageBuffer options: (NSDictionary *) options ;
+(CIImage *) imageWithIOSurface: (id) surface options: (NSDictionary *) options ;
+(CIImage *) imageWithBitmapData: (NSData *) data bytesPerRow: (size_t) bytesPerRow size: (CGSize) size format: (CIFormat) format colorSpace: (id) colorSpace ;
+(CIImage *) imageWithCVPixelBuffer: (id) pixelBuffer ;
+(CIImage *) imageWithColor: (CIColor *) color ;
+(CIImage *) imageWithCGImage: (id) image ;
+(CIImage *) imageWithData: (NSData *) data options: (NSDictionary *) options ;
+(CIImage *) imageWithCVImageBuffer: (id) imageBuffer ;
+(CIImage *) imageWithCGImage: (id) image options: (NSDictionary *) options ;
+(CIImage *) imageWithMTLTexture: (id) texture options: (NSDictionary *) options ;
+(CIImage *) imageWithData: (NSData *) data ;
@end
@protocol CIImageAutoAdjustmentCategoryInstanceExports<JSExport>
-(NSArray *) autoAdjustmentFilters;
-(NSArray *) autoAdjustmentFiltersWithOptions: (NSDictionary *) options ;
@end
@protocol CIImageAutoAdjustmentCategoryClassExports<JSExport>
@end
#pragma clang diagnostic pop